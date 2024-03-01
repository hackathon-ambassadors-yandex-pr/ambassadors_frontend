import './Ambassadors.scss';
import bluebell from '../../../src/images/notification.svg';
import manager from '../../images/manager_photo.svg';

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
    </div>
  );
}

export default Ambassadors;
