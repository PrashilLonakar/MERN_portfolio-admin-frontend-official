import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import ThemeProvider from './theme/theme';

function App() {
    const isLogged: boolean = true;
    const routing = useRoutes(routes(isLogged));
    return <ThemeProvider> {routing} </ThemeProvider>;
}

export default App;
