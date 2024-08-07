import { Components, Theme } from '@mui/material/styles';

const AppBar = (theme: Theme): Components<Theme> => ({
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: theme.palette.common.white,
                boxShadow: theme.shadows[1],
                borderRadius: theme.shape.borderRadius * 1,
                color: theme.palette.common.black,
            },
        },
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                padding: theme.spacing(1, 2),
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                color: theme.palette.common.black,
            },
        },
    },
});

export default AppBar;
