import arrows from '../../images/container_vector_icon.png';
import telegramm from '../../images/telegram.svg';
import './Table.scss';

function Table() {
  return (
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
        <p className="table__text">Телеграмм</p>
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
        <p className="items__status item__status_new">Новый</p>
        <p className="items__content">1</p>
        <p className="items__action">Новый амбасадор</p>
        <img className="items__telegramm" src={telegramm} />
      </div>
      <div className="items">
        <input type="checkbox" className="items__checkbox" />
        <p className="items__name">Иванов Иван</p>
        <p className="items__promocod"> STEPA</p>
        <p className="items__date">15.12.24</p>
        <p className="items__status item__status_confirmed">Уточняется</p>
        <p className="items__content">1</p>
        <p className="items__action">Новый амбасадор</p>
        <img className="items__telegramm" src={telegramm} />
      </div>
      <div className="items">
        <input type="checkbox" className="items__checkbox" />
        <p className="items__name">Иванов Иван</p>
        <p className="items__promocod"> STEPA</p>
        <p className="items__date">15.12.24</p>
        <p className="items__status item__status_archive">Архив</p>
        <p className="items__content">1</p>
        <p className="items__action item__action_new">Новый амбасадор</p>
        <img className="items__telegramm" src={telegramm} />
      </div>
      <div className="items">
        <input type="checkbox" className="items__checkbox" />
        <p className="items__name">Иванов Иван</p>
        <p className="items__promocod"> STEPA</p>
        <p className="items__date">15.12.24</p>
        <p className="items__status">Новый</p>
        <p className="items__content">1</p>
        <p className="items__action item__action_no-answer">Новый амбасадор</p>
        <img className="items__telegramm" src={telegramm} />
      </div>
      <div className="items">
        <input type="checkbox" className="items__checkbox" />
        <p className="items__name">Иванов Иван</p>
        <p className="items__promocod"> STEPA</p>
        <p className="items__date">15.12.24</p>
        <p className="items__status">Новый</p>
        <p className="items__content">1</p>
        <p className="items__action item__action_suspended">Новый амбасадор</p>
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
  );
}

export default Table;
