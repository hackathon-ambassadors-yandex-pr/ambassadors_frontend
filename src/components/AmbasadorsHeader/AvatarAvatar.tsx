import bluebell from '../../../src/images/notification.svg';
import manager from '../../images/manager_photo.svg';

function AmbasadorsAvatar() {
  return (
    <div className="ambasadors__avatar-container">
      <img className="ambasadors__bluebell" src={bluebell} />
      <img className="ambasadors__manager" src={manager} />
    </div>
  );
}

export default AmbasadorsAvatar;
