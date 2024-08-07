import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
    StyledEngineProvider,
    Theme,
    Components,
} from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const themeOptions = useMemo(
        () => ({
            palette,
            shape: { borderRadius: 8 },
            typography,
        }),
        [],
    );

    const theme: any = createTheme(themeOptions);
    theme.components = componentsOverride(theme) as Components<Theme>;

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
