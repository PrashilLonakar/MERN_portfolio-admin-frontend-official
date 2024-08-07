import { Components, Theme } from '@mui/material/styles';
const Button = (theme: Theme): Components<Theme> => ({
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '0.375rem',
                padding: '0.5rem 3.125rem',
            },
        },
    },
});

export default Button;
