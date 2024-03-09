import logo from '../../images/logo.svg';
import './header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} className="header__logo" />
      </NavLink>
      <nav className="navigation">
        <NavLink to="#" className="navigation__item">
          Амбассадоры
        </NavLink>
        <NavLink to="#" className="navigation__item">
          Контент
        </NavLink>
        <NavLink to="#" className="navigation__item">
          Мерч
        </NavLink>
        <NavLink to="#" className="navigation__item">
          Бюджет
        </NavLink>
        <NavLink to="#" className="navigation__item">
          Аналитика
        </NavLink>
      </nav>
      <button className="header__exit">Выход</button>
    </div>
  );
}

export default Header;
