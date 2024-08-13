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
        path: '/',
        element: isLogged ? <PostLoginLayout /> : <Navigate to="/" />,
        title: 'Home',
        children: [
            { path: '/', element: <Navigate to="/dashboard" /> },
            { path: 'dashboard', element: <HomePage />, title: 'Dashbboard' },
        ],
    },
    {
        path: '/auth',
        element: <PreLoginLayout />,
        title: 'pre-login',
        children: [
            { path: '/auth', element: <Navigate to="/auth/login" /> },
            { path: '/login', element: <AuthPage />, title: 'login' },
        ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
];

export default routes;
