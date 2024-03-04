import './AmbasadorsMenu.scss';

function AmbasadorsMenu() {
  return (
    <div className="ambasadors__menu">
      <button className="ambasadors__link">Все</button>
      <button className="ambasadors__link">Новый</button>
      <button className="ambasadors__link">Активный</button>
      <button className="ambasadors__link">Уточняется</button>
      <button className="ambasadors__link">На паузе</button>
      <button className="ambasadors__link">Архив</button>
    </div>
  );
}

export default AmbasadorsMenu;
