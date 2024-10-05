import { ReactNode } from 'react';
import { Student } from '../../types';

export interface ExcelDataProviderProps {
    children: ReactNode;
}

export interface ExcelDataProviderType {
    data: Student[] | null;
    setData: (data: Student[] | null) => void;
}
