import { createContext, FC, ReactNode, useState } from 'react';
import { Student } from '../../types';
import { ExcelDataProviderProps, ExcelDataProviderType } from './types';

export const ExcelDataContext = createContext<ExcelDataProviderType | null>(
    null
);

export const ExcellDataProvider: FC<ExcelDataProviderProps> = ({
    children,
}) => {
    const [data, setData] = useState<Student[] | null>(null);

    return (
        <ExcelDataContext.Provider value={{ data, setData }}>
            {children}
        </ExcelDataContext.Provider>
    );
};
