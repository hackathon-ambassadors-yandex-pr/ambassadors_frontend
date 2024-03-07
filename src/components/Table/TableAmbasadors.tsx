import './TableAmbasadors.scss';
import file from '../../images/file.svg';

function TableAmbasadors() {
  return (
    <div className="table-ambasadors">
      <div className="table-ambasadors__top">
        <p className="table-ambasadors__text">Дата</p>
        <p className="table-ambasadors__text">Тип события</p>
        <p className="table-ambasadors__text">Статус</p>
        <p className="table-ambasadors__text">Ссылка</p>
      </div>
      <div className="table-item">
        <p className="table-item__name">10.12.24</p>
        <p className="table-item__type">Получение контента</p>
        <p className="table-item__status">Новый</p>
        <div className="table-item__link">
          <p className="table-item__link">Ссылка на контент</p>
          <img className="table-item__file" src={file} />
        </div>
      </div>
      <div className="table-item">
        <p className="table-item__name">10.12.24</p>
        <p className="table-item__type">Получение контента</p>
        <p className="table-item__status">Новый</p>
        <div className="table-item__link">
          <p className="table-item__link">Ссылка на контент</p>
          <img className="table-item__file" src={file} />
        </div>
      </div>
      <div className="table-item">
        <p className="table-item__name">10.12.24</p>
        <p className="table-item__type">Получение контента</p>
        <p className="table-item__status">Новый</p>
        <div className="table-item__link">
          <p className="table-item__link">Ссылка на контент</p>
          <img className="table-item__file" src={file} />
        </div>
      </div>
      <div className="table-item">
        <p className="table-item__name">10.12.24</p>
        <p className="table-item__type">Получение контента</p>
        <p className="table-item__status">Новый</p>
        <div className="table-item__link">
          <p className="table-item__link">Ссылка на контент</p>
          <img className="table-item__file" src={file} />
        </div>
      </div>
    </div>
  );
}

export default TableAmbasadors;
