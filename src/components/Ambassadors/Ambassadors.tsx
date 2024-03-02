import './Ambassadors.scss';
import bluebell from '../../../src/images/notification.svg';
import manager from '../../images/manager_photo.svg';
import mail from '../../images/mail.svg';
import filter from '../../images/filters.svg';
import arrows from '../../images/container_vector_icon.png';
import telegramm from '../../images/telegram.svg';
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
      <div className="table">
        <div className="table__top">
          <input type="checkbox" className="table__checkbox" />
          <p className="table__text">Фамилия Имя</p>
          <img className="table__arrows" src={arrows} />
          <p className="table__text">Промокод</p>
          <p className="table__text">Дата</p>
          <img className="table__arrows" src={arrows} />
          <p className="table__text">Статус</p>
          <p className="table__text">Контент</p>
          <img className="table__arrows" src={arrows} />
          <p className="table__text">Действие</p>
          <img className="table__arrows" src={arrows} />
          <p className="table__text">телеграмм</p>
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
        <div className="items">
          <input type="checkbox" className="items__checkbox" />
          <p className="items__name">Иванов Иван</p>
          <p className="items__promocod"> STEPA</p>
          <p className="items__date">15.12.24</p>
          <p className="items__status">Новый</p>
          <p className="items__content">1</p>
          <p className="items__action">Новый амбасадор</p>
          <img className="items__telegramm" src={telegramm} />
        </div>
      </div>
      <div className="page">
        <div className="page__number">
          <button className="arrow arrow-left"></button>
          <button className="arrow arrow-right"></button>
        </div>
      </div>
    </div>
  );
}

export default Ambassadors;
