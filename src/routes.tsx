import { RouteObject } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UsersPage from './pages/users/UsersPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/users', element: <UsersPage /> },
    ],
  },
];

export default routes;
