import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';
import s from './Layout.module.scss';

/**
 * Component for displaying the layout of the application
 * @component
 * @returns {JSX.Element} The rendered Layout component
 */
const Layout = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main className={s.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
