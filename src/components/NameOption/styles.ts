import { css } from '@emotion/css';

export const getClasses = () => {
    return {
        invertedCorners: css({
            height: '200px',
            width: '200px',
            backgroundColor: 'red !important',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '40px',
                height: '40px',
                backgroundColor: 'white', // Same as background color of container
                borderRadius: '50%',
                boxShadow: '-20px 20px 0 0 red', // Creates the cut effect
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '40px',
                height: '40px',
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '20px -20px 0 0 red',
            },
        }),
    };
};
