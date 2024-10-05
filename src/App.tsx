import { Box } from '@mui/material';
import { StudentCard } from './components/StudentCard';
import { Student } from './types';
import { NameOption } from './components';
import { FileInput } from './components/FileInput';
import { ExcellDataProvider } from './contexts';

const App = () => {
    const student: Student = {
        firstName: 'ישראל',
        lastName: 'ישראלי',
        image: 'https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png?format=2500w',
    };

    return (
        <ExcellDataProvider>
            <Box>
                <StudentCard student={{ ...student }} />
                {/* <NameOption name="יובל בארי"/> */}
                <FileInput />
            </Box>
        </ExcellDataProvider>
    );
};

export default App;
