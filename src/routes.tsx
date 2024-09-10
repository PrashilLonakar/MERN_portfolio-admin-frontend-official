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
        path: '/dashboard',
        element: isLogged ? <PostLoginLayout /> : <Navigate to="/auth" />,
        title: 'Home',
        children: [
            { path: '/dashboard', element: <Navigate to="/dashboard/home" /> }, // Relative path
            { path: 'home', element: <HomePage />, title: 'Dashboard' },
        ],
    },
    {
        path: '/auth',
        element: <PreLoginLayout />,
        title: 'Pre-login',
        children: [
            { path: '/auth', element: <Navigate to="/auth/login" /> },
            { path: '/login', element: <AuthPage />, title: 'login' },
        ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
];

export default routes;
