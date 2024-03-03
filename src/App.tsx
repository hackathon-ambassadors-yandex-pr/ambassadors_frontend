import './App.scss';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Layout from './components/Layout/Layout';
import logo from './images/logo.svg';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
        <div className="page__container">
          <div className="header">
            <img src={logo} className="header__logo" />
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
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Ambassadors />} />
            <Route />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
