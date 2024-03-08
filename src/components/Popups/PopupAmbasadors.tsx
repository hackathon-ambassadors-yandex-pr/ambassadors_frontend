import './Popups.scss';
import ButtonsContainer from '../buttons/ButtonsContainer';
import ButtonCancel from '../buttons/ButtonCancel';
import ButtonSave from '../buttons/ButtonSave';

function PopupAmbasadors() {
  return (
    <form className="popup__form">
      <div className="popop__title">
        <h1 className="title">Александра Соколова</h1>
        <p className="status">Новый</p>
        <label className="popup__label-guide" htmlFor="checkbox-guide">
          Гайд
          <input
            type="checkbox"
            className="popup__checkbox"
            name="checkbox-guide"
          />
        </label>
      </div>
      <button className="button-close"></button>
      <div className="nik-telegramm">
        <p className="nik-telegramm__name">Ник Телеграма</p>
        <a href="https://t.me/sahsasoko">https://t.me/sahsasoko</a>
      </div>

      <ButtonsContainer className="popup__buttons">
        <ButtonCancel></ButtonCancel>
        <ButtonSave></ButtonSave>
      </ButtonsContainer>
    </form>
  );
}
export default PopupAmbasadors;
