import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';
import s from './Layout.module.scss';

const Layout = () => {
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
