import { FC } from 'react';
import { NameOptionProps } from './types';
import { Box, Card } from '@mui/material';
import { getClasses } from './styles';

export const NameOption: FC<NameOptionProps> = ({ name, variant }) => {
    const classes = getClasses();

    return (
        <Box>
            <Card className={classes.invertedCorners}></Card>
        </Box>
    );
};
