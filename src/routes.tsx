import { Navigate } from 'react-router-dom';
import HomeLayout from './layouts/Post-login';
import HomePage from './pages/Home';

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    title?: string;
    children?: RouteConfig[];
}

const routes = (isLogged: boolean): RouteConfig[] => [
    {
        path: '/',
        element: <HomeLayout />,
        title: 'Home',
        children: [{ path: 'home', element: <HomePage />, title: 'main' }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
];

export default routes;
