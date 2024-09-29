import { NavLink } from 'react-router-dom';

import s from './NotFoundPage.module.scss';

/**
 * Component for displaying 404 page
 * @component
 * @returns {JSX.Element} The rendered NotFoundPage component
 */
const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <div className={s.imageSection}>
        <h1 className={s.fourZeroFourText}>404</h1>
      </div>
      <div className={s.content}>
        <p className={s.message}>The page you are looking for not avaible!</p>
        <NavLink to="/" className={s.button}>
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
