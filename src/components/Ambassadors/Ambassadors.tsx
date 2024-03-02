import './Ambassadors.scss';
import PageScroll from '../PageScroll/pageScroll';
import bluebell from '../../../src/images/notification.svg';
import manager from '../../images/manager_photo.svg';
import mail from '../../images/mail.svg';
import filter from '../../images/filters.svg';
import Table from '../Table/Table';
import { NavLink } from 'react-router-dom';

function Ambassadors() {
  return (
    <div className="ambasadors">
      <div className="ambasadors__main">
        <h1 className="ambasadors__title">Амбассадоры</h1>
        <div className="ambasadors__avatar-container">
          <img className="ambasadors__bluebell" src={bluebell} />
          <img className="ambasadors__manager" src={manager} />
        </div>
      </div>
      <nav className="ambasadors__menu">
        <NavLink className="ambasadors__link" to="#">
          Все
        </NavLink>
        <NavLink className="ambasadors__link" to="#">
          Новый
        </NavLink>
        <NavLink className="ambasadors__link" to="#">
          Активный
        </NavLink>
        <NavLink className="ambasadors__link" to="#">
          Уточняется
        </NavLink>
        <NavLink className="ambasadors__link" to="#">
          На паузе
        </NavLink>
        <NavLink className="ambasadors__link" to="#">
          Архив
        </NavLink>
      </nav>
      <div className="ambasadors__search">
        <input
          type="search"
          placeholder="Введите имя"
          className="ambasadors__search-name"
        />
        <div className="ambasadors__dates">
          <input type="date" className="ambasadors__date" />
          <input type="date" />
        </div>
        <div className="ambasadors__buttons">
          <img className="ambasadors__button" src={mail} />
          <img className="ambasadors__button" src={filter} />
        </div>
      </div>
      <Table></Table>
      <PageScroll></PageScroll>
    </div>
  );
}

export default Ambassadors;
