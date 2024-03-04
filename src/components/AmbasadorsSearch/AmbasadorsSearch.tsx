import mail from '../../images/mail.svg';
import filter from '../../images/filters.svg';

function AmbasadorsSearch() {
  return (
    <div className="ambasadors__search">
      <input
        type="search"
        placeholder="Введите имя"
        className="ambasadors__search-name"
      />
      <div className="ambasadors__dates">
        <input type="date" className="ambasadors__date" />

        <input type="date" className="ambasadors__date" />
      </div>
      <div className="ambasadors__buttons">
        <img className="ambasadors__button" src={mail} />
        <img className="ambasadors__button" src={filter} />
      </div>
    </div>
  );
}

export default AmbasadorsSearch;
