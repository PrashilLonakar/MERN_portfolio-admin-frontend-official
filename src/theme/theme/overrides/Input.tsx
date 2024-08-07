import { Components, Theme } from '@mui/material/styles';

const Input = (theme: Theme): Components<Theme> => ({
    MuiTextField: {
        styleOverrides: {
            root: {
                margin: theme.spacing(1, 0),
                '& .MuiInputBase-root': {
                    backgroundColor: '#fff',
                },
                '& .MuiInputBase-input': {
                    padding: '10px 12px',
                },
                '& .MuiInputLabel-root': {
                    transform: 'translate(14px, 12px) scale(1)',
                },
                '& .MuiInputLabel-shrink': {
                    transform: 'translate(14px, -6px) scale(0.75)',
                },
                // '& .Mui-disabled': {
                //     backgroundColor: 'rgba(0, 0, 0, 0.38)',
                // },
            },
        },
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                borderRadius: '4px',
                backgroundColor: '#f5f5f5',
                '&.Mui-focused': {
                    backgroundColor: '#fff',
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '& fieldset': {
                    borderColor: '#dcdcdc',
                },
                '&:hover fieldset': {
                    borderColor: '#bfbfbf',
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                },
            },
        },
    },
});

export default Input;
