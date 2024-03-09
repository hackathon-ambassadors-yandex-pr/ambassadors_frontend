import './Popups.scss';
import ButtonsContainer from '../buttons/ButtonsContainer';
import ButtonCancel from '../buttons/ButtonCancel';
import ButtonSave from '../buttons/ButtonSave';
import { useState } from 'react';
import Womans from '../../images/Womans.png';
import { useNavigate } from 'react-router-dom';

interface filterpopup {
  setfilterPopup: (value: boolean) => void;
}

function PopupAmbasadors(props: filterpopup) {
  const [selectContent, setSelectContent] = useState<string>('');
  const [selectStatus, setSelectStatus] = useState<string>('');

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('creation');
    props.setfilterPopup(false);
    console.log(selectContent);
    console.log(selectStatus);
  };

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <div className="popup__container">
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
        <div className="nik-telegramm">
          <p className="nik-telegramm__name">Ник Телеграма</p>
          <a href="https://t.me/sahsasoko">https://t.me/sahsasoko</a>
        </div>
        <div className="status-and-platform">
          <label className="label-content">
            Платформа контента
            <select
              className="select-content"
              onChange={(e) => setSelectContent(e.target.value)}
            >
              <option value="Review">Отзыв</option>
              <option value="Habr">Хабр</option>
              <option value="VC">VC</option>
              <option value="YouTube">Ютуб</option>
              <option value="YouTube">Телеграм</option>
            </select>
          </label>
          <label className="label-content">
            Платформа контента
            <select
              className="select-content"
              onChange={(e) => setSelectStatus(e.target.value)}
            >
              <option value="new">Новый</option>
              <option value="Active">Активный</option>
              <option value="to_be_confirmed">Уточняется</option>
              <option value="on_pause">На паузе</option>
              <option value="Archive">Архив</option>
            </select>
          </label>
        </div>
        <div className="link">
          <p className="link__name">Ссылка</p>
          <div className="link__contaier">
            <a
              className="link__links"
              href="https://forms.yandex.ru/surveys/13477860.c94a0e28ca5059ca34dc4210d4a35008780740a7/"
            >
              https://forms.yandex.ru/surveys/13477860.c94a0e28ca5059ca34dc4210d4a35008780740a7/
            </a>
            <div className="link__file">
              <img className="link__img" src={Womans}></img>
              <img className="link__img" src={Womans}></img>
            </div>
          </div>
        </div>
        <div className="comment">
          <p className="comment__name">Комментарий</p>
          <textarea className="comment__textarea"></textarea>
        </div>
      </div>
      <div className="buttons">
        <ButtonsContainer className="popup__buttons">
          <ButtonCancel></ButtonCancel>
          <ButtonSave></ButtonSave>
        </ButtonsContainer>
      </div>
    </form>
  );
}
export default PopupAmbasadors;
