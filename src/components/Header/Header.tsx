import logo from '../../images/logo.svg';
import './Header.scss';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  onLogout: () => void;
}

function Header({ onLogout }: HeaderProps) {
  const handleExit = () => {
    onLogout();
  };
  return (
    <div className="header">
      <NavLink to="/">
        <img alt="Логотип" src={logo} className="header__logo" />
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
      <button onClick={handleExit} className="header__exit">
        Выход
      </button>
    </div>
  );
}

export default Header;
