import { Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import PostLoginLayout from './layouts/post-login';
import PreLoginLayout from './layouts/pre-login';
import AuthPage from './pages/auth';

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    title?: string;
    children?: RouteConfig[];
}

const routes = (isLogged: boolean): RouteConfig[] => [
    {
        path: '/home',
        element: isLogged ? <PostLoginLayout /> : <Navigate to="/" />,
        title: 'Home',
        children: [
            { path: '/home', element: <Navigate to="/home/dashboard" /> },
            { path: 'dashboard', element: <HomePage />, title: 'Dashbboard' },
        ],
    },
    {
        path: '/',
        element: <PreLoginLayout />,
        title: 'pre-login',
        children: [
            { path: '/', element: <Navigate to="/login" /> },
            { path: '/login', element: <AuthPage />, title: 'login' },
        ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
];

export default routes;
