import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${css.textLink} ${isActive ? css.active : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${css.textLink} ${isActive ? css.active : ''}`
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
