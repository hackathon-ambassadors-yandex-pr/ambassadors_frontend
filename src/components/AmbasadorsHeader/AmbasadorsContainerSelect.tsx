function AmbasadorsContainerSelect() {
  return (
    <div className="ambasadors__container">
      <h1 className="ambasadors__title">Амбассадор</h1>
      <form className="status-ambasadors">
        <select className="popup__select-gender">
          <option value="new">Новый</option>
          <option value="Active">Активный</option>
          <option value="to_be_confirmed">Уточняется</option>
          <option value="on_pause">На паузе</option>
          <option value="Archive">Архив</option>
        </select>
      </form>
    </div>
  );
}

export default AmbasadorsContainerSelect;
