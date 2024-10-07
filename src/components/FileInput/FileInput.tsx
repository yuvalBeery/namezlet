import { Box, Card, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import * as XLSX from 'xlsx';
import { DropzoneArea } from 'mui-file-dropzone';
import { useExcelDataContext } from '../../hooks';
import { Student } from '../../types';
import { STUDENT_EXCEL_KEYS } from '../../utils/consts';
import { StudentCard } from '../StudentCard';

export const FileInput: FC = () => {
	const { data, setData } = useExcelDataContext();

	const mapDataToStudents = (data: unknown[]) => {
		return data.map((element) => {
			const student: Partial<Student> = {};

			Object.keys(STUDENT_EXCEL_KEYS).forEach((key) => {
				student[key as keyof Student] = (element as Partial<Student>)[
					STUDENT_EXCEL_KEYS[key as keyof Student] as keyof Student
				];
			});

			return student as Student;
		});
	};

	const handleFileUpload = (acceptedFiles: File[]) => {
		if (acceptedFiles.length == 0) {
			setData(null);
			return;
		}

		if (acceptedFiles.length != 1) {
			throw new Error('only one file can be selected');
		}

		const file = acceptedFiles[0];

		const fileExtentionIndex = file.name.lastIndexOf('.');
		const fileExtention = file.name.substring(fileExtentionIndex + 1);

		if (fileExtention != 'xls' && fileExtention != 'xlsx') {
			throw new Error('file extention must be xls or xlsx');
		}

		const reader = new FileReader();

		reader.onload = (event: ProgressEvent<FileReader>) => {
			const binaryString = event.target?.result;
			const workbook = XLSX.read(binaryString, { type: 'binary' });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const sheetData = XLSX.utils.sheet_to_json(sheet);
			const students = mapDataToStudents(sheetData);

			setData(students);
		};

		reader.readAsBinaryString(file);
	};

	const renderedStudents = () => {
		return data?.map((student) => {
			return <StudentCard student={student} />;
		});
	};

	return (
		<Box>
			{data ? (
				renderedStudents()
			) : (
				<DropzoneArea fileObjects={[]} onChange={handleFileUpload} />
			)}
		</Box>
	);
};
