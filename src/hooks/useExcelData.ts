import { useContext } from 'react';
import { ExcelDataContext } from '../contexts';
import { ExcelDataProviderType } from '../contexts/ExcelDataContext/types';

export const useExcelDataContext = (): ExcelDataProviderType => {
    const context = useContext(ExcelDataContext);

    if (!context) {
        throw new Error(
            'Excel data provider may only be used inside its context'
        );
    }

    return { ...(context as ExcelDataProviderType) };
};
