import { RouteObject } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UsersPage from './pages/users/UsersPage';

/*
 * Routes for the application
 * @constant
 * @type {RouteObject[]}
 */
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/users', element: <UsersPage /> },
    ],
  },
];

export default routes;
