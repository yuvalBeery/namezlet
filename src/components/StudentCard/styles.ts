import { css } from '@emotion/css';

export const getClasses = () => {
    return {
        studentCard: css({
            marginTop: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }),
        card: css({
            width: '33vw',
        }),
        cardImage: css({
            height: '33vh',
        }),
        cardContent: css({
            '& .MuiTypography-root': {
                textAlign: 'center',
            },
        }),
    };
};
