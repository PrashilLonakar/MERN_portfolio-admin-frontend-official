import { Components, Theme } from '@mui/material/styles';

const Select = (theme: Theme): Components<Theme> => ({
    MuiSelect: {
        styleOverrides: {
            root: {
                backgroundColor: '#fff',
                borderRadius: '4px',
                '&.Mui-focused': {
                    backgroundColor: '#fff',
                },
            },
            select: {
                padding: '10px 12px',
            },
            icon: {
                color: '#bfbfbf',
            },
        },
    },
    MuiMenu: {
        styleOverrides: {
            paper: {
                borderRadius: '4px',
                boxShadow: theme.shadows[2],
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                '&.Mui-selected': {
                    backgroundColor: theme.palette.action.selected,
                },
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                },
            },
        },
    },
});

export default Select;
