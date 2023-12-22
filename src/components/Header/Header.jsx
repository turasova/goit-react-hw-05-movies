import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={css.textLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.textLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
