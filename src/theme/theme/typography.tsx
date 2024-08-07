import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        '@media (min-width:600px)': {
            fontSize: '3rem',
        },
        '@media (min-width:900px)': {
            fontSize: '3.5rem',
        },
        '@media (min-width:1200px)': {
            fontSize: '4rem',
        },
    },
    // Define other typography variants similarly
    button: {
        textTransform: 'none', // Ensure this is a valid value
    },
};

export default typography;
