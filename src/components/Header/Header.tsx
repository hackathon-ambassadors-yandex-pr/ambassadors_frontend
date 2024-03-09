import logo from '../../images/logo.svg';
import './header.scss';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  onLoggedIn: (loggedIn: boolean) => void;
}

function Header({ onLoggedIn }: HeaderProps) {
  const handleExit = () => {
    onLoggedIn(false);
  };
  return (
    <div className="header">
      <img alt="Логотип" src={logo} className="header__logo" />
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
