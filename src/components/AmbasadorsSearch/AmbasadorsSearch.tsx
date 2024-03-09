import mail from '../../images/mail.svg';
import filter from '../../images/filters.svg';
import './AmbasadorsSearch.scss';
interface filterpopup {
  filterpopup: boolean;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
}

function AmbasadorsSearch({ handlefilterpopup }: filterpopup) {
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
        <img
          className="ambasadors__button"
          src={filter}
          onClick={handlefilterpopup}
        />
      </div>
    </div>
  );
}

export default AmbasadorsSearch;
