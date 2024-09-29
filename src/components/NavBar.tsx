import cn from 'classnames';
import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { MdHome } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.scss';

/**
 * Component for displaying the navigation bar
 * @description This component is used to navigate between different pages of the application
 * @component
 * @returns {JSX.Element} The rendered Layout component
 */
const NavBar = (): JSX.Element => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavItems = () => {
    setShowNav(!showNav);
  };
  const links = [{ label: 'Users', href: '/users' }];

  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <NavLink to="/" className={s.homeLink}>
          <MdHome size={24} className={s.homeIcon} />
        </NavLink>
        <div className={s.menuIconSection} onClick={toggleNavItems}>
          <FiAlignJustify color="#ffffff" size={24} />
        </div>
        <div
          className={cn(s.navElements, showNav && s.active)}
          onClick={toggleNavItems}
        >
          <ul className={s.navbarLinks}>
            {links.map((link) => (
              <li key={link.href}>
                <NavLink to={link.href} className={s.navLink}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
