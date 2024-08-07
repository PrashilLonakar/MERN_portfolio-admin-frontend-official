import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
    const isLogged: boolean = true;
    const routing = useRoutes(routes(isLogged));
    return <div> {routing} </div>;
}

export default App;
