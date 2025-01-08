import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header id="header" className="Header">
      <Link to="/" className="Header__logo">
        abratsiuk
      </Link>

      <ul className="Header__menu">
        <li className="Header__menuItem" key="home">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'link link_active' : 'link'
            }
          >
            home
          </NavLink>
        </li>
        <li className="Header__menuItem" key="projects">
          <NavLink
            to="/project/p5.todos"
            className={({ isActive }) =>
              isActive ? 'link link_active' : 'link'
            }
          >
            projects
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
