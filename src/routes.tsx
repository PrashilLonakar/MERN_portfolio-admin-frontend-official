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
        element: isLogged ? <PostLoginLayout /> : <Navigate to="/auth" />,
        title: 'Home',
        children: [
            { path: '/', element: <Navigate to="/dashboard" /> }, // Relative path
            { path: 'dashboard', element: <HomePage />, title: 'Dashboard' },
        ],
    },
    {
        path: '/auth',
        element: <PreLoginLayout />,
        title: 'Pre-login',
        children: [
            { path: '/auth', element: <Navigate to="/auth/login" /> }, // Relative path
            { path: 'login', element: <AuthPage />, title: 'Login' },
        ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
];

export default routes;
