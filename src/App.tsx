import { Box } from '@mui/material';
import { StudentCard } from './components/StudentCard';
import { Student } from './types';
import { NameOption } from './components';
import { FileInput } from './components/FileInput';
import { ExcellDataProvider } from './contexts';

const App = () => {
    return (
        <ExcellDataProvider>
            <Box>
                <FileInput />
            </Box>
        </ExcellDataProvider>
    );
};

export default App;
