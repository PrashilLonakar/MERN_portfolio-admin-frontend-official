import { Components, Theme } from '@mui/material/styles';

const Card = (theme: Theme): Components<Theme> => ({
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '10px',
                position: 'relative',
                zIndex: 0,
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    MuiCardHeader: {
        styleOverrides: {
            root: {
                padding: theme.spacing(3, 3, 0),
            },
        },
        defaultProps: {
            titleTypographyProps: { variant: 'h6' },
            subheaderTypographyProps: { variant: 'body2' },
        },
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: '30px',
            },
        },
    },
});

export default Card;
