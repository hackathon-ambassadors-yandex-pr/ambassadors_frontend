import './AmbasadorsCard.scss';
import { useNavigate } from 'react-router-dom';

function AmbasadorsCard() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/new');
    console.log('test');
  };

  return (
    <>
      {location.pathname === '/creation' ? (
        <form
          className="card-ambasadors"
          id="formAmbasadors"
          onSubmit={handleSubmit}
        >
          <div className="data-fio">
            <input
              className="data-fio__lastname"
              type="text"
              placeholder="Соколова"
            />
            <input
              className="data-fio__name"
              type="text"
              placeholder="Александра"
            />
            <input
              className="data-fio__surname"
              type="text"
              placeholder="Сергеевна"
            />
          </div>
          <div className="data-container">
            <div className="data-item">
              <label htmlFor="index" className="label-item">
                Индекс
              </label>
              <input
                type="text"
                placeholder="198096"
                name="index"
                className="input-item"
              />
            </div>
            <div className="data-item">
              <label htmlFor="telephone" className="label-item">
                Телефон
              </label>
              <input
                type="text"
                placeholder="+7 911 385 69 74"
                name="telephone"
                className="input-item"
              />
            </div>
          </div>

          <div className="data-container">
            <div className="data-item">
              <label htmlFor="country" className="label-item">
                Страна
              </label>
              <input
                type="text"
                placeholder="Россия"
                name="country"
                className="input-item"
              />
            </div>
            <div className="data-item">
              <label htmlFor="telegramm" className="label-item">
                Телеграмм
              </label>
              <input
                type="text"
                placeholder="@sahsasokol"
                name="telegramm"
                className="input-item"
              />
            </div>
          </div>
          <div className="data-container">
            <div className="data-item">
              <label htmlFor="city" className="label-item">
                Город
              </label>
              <input
                type="text"
                placeholder="Санкт-Петербург"
                name="city"
                className="input-item"
              />
            </div>
            <div className="data-item">
              <label htmlFor="link-to-block" className="label-item">
                Ссылка на блог
              </label>
              <input
                type="text"
                placeholder="https://disk.yandex.ru/i/vTelZqT1-Pd7PQ"
                name="link-to-block"
                className="input-item"
              />
            </div>
          </div>
          <div className="data-container">
            <div className="data-item">
              <label htmlFor="email" className="label-item">
                Электронная почта
              </label>
              <input
                type="text"
                placeholder="sahsasokol@yandex.ru"
                name="email"
                className="input-item"
              />
            </div>
            <div className="data-item">
              <label htmlFor="SASHA" className="label-item">
                Промокод
              </label>
              <input
                type="text"
                placeholder="SASHA"
                name="index"
                className="input-item"
              />
            </div>
          </div>
          <div className="data-adress">
            <label htmlFor="adress" className="label-item-adress">
              Адрес
            </label>
            <input
              type="text"
              placeholder="ул. Дорога на Турухтанные острова д. 115, корпус 2, кв. 1185"
              name="index"
              className="input-adress"
            />
          </div>
          <div className="data-onbording">
            <input
              type="text"
              placeholder="Онбординг"
              name="index"
              className="input-onbording"
            />
            <input
              type="text"
              placeholder="10.07.2024"
              name="index"
              className="input-onbording"
            />
            <input
              type="text"
              placeholder="Гайд"
              name="index"
              className="input-onbording"
            />
            <input
              type="text"
              placeholder="08.12.2024"
              name="index"
              className="input-onbording"
            />
          </div>
          <div className="data-comment">
            <input
              className="data-comment__manager"
              type="text"
              placeholder="Комментарий менеджера"
            />
          </div>
        </form>
      ) : (
        <form
          className="card-ambasadors"
          id="formAmbasadors"
          onSubmit={handleSubmit}
        >
          <div className="data-fio">
            <input
              className="data-fio__lastname"
              type="text"
              placeholder="Соколова"
              value="Иван"
            />
            <input
              className="data-fio__name"
              type="text"
              placeholder="Александра"
              value="Иван"
            />
            <input
              className="data-fio__surname"
              type="text"
              placeholder="Сергеевна"
              value="Иванович"
            />
          </div>
          <div className="data-container">
            <div className="data-item">
              <label htmlFor="index" className="label-item">
                Индекс
              </label>
              <input
                type="text"
                placeholder="198096"
                name="index"
                className="input-item"
                value="162340"
              />
            </div>
            <div className="data-item">
              <label htmlFor="telephone" className="label-item">
                Телефон
              </label>
              <input
                type="text"
                placeholder="+7 911 385 69 74"
                name="telephone"
                className="input-item"
                value="+7 911 385 69 74"
              />
            </div>
          </div>

          <div className="data-container">
            <div className="data-item">
              <label htmlFor="country" className="label-item">
                Страна
              </label>
              <input
                type="text"
                placeholder="Россия"
                name="country"
                className="input-item"
                value="Poccия"
              />
            </div>
            <div className="data-item">
              <label htmlFor="telegramm" className="label-item">
                Телеграмм
              </label>
              <input
                type="text"
                placeholder="@sahsasokol"
                name="telegramm"
                className="input-item"
                value="@sahsasokol"
              />
            </div>
          </div>
          <div className="data-container">
            <div className="data-item">
              <label htmlFor="city" className="label-item">
                Город
              </label>
              <input
                type="text"
                placeholder="Санкт-Петербург"
                name="city"
                className="input-item"
                value="Великий Устюг"
              />
            </div>
            <div className="data-item">
              <label htmlFor="link-to-block" className="label-item">
                Ссылка на блог
              </label>
              <input
                type="text"
                placeholder="https://disk.yandex.ru/i/vTelZqT1-Pd7PQ"
                name="link-to-block"
                className="input-item"
                value="https://disk.yandex.ru/i/vTelZqT1-Pd7PQ"
              />
            </div>
          </div>
          <div className="data-container">
            <div className="data-item">
              <label htmlFor="email" className="label-item">
                Электронная почта
              </label>
              <input
                type="text"
                placeholder="sahsasokol@yandex.ru"
                name="email"
                className="input-item"
                value="sahsasokol@yandex.ru"
              />
            </div>
            <div className="data-item">
              <label htmlFor="SASHA" className="label-item">
                Промокод
              </label>
              <input
                type="text"
                placeholder="SASHA"
                name="index"
                className="input-item"
                value="SASHA"
              />
            </div>
          </div>
          <div className="data-adress">
            <label htmlFor="adress" className="label-item-adress">
              Адрес
            </label>
            <input
              type="text"
              placeholder="ул. Дорога на Турухтанные острова д. 115, корпус 2, кв. 1185"
              name="index"
              className="input-adress"
              value="ул. Дорога на Турухтанные острова д. 115, корпус 2, кв. 1185"
            />
          </div>
          <div className="data-onbording">
            <input
              type="text"
              placeholder="Онбординг"
              name="index"
              className="input-onbording"
              value="Онбординг"
            />
            <input
              type="text"
              placeholder="10.07.2024"
              name="index"
              className="input-onbording"
              value="10.07.2024"
            />
            <input
              type="text"
              placeholder="Гайд"
              name="index"
              className="input-onbording"
              value="Гайд"
            />
            <input
              type="text"
              placeholder="08.12.2024"
              name="index"
              className="input-onbording"
              value="08.12.2024"
            />
          </div>
          <div className="data-comment">
            <input
              className="data-comment__manager"
              type="text"
              placeholder="Комментарий менеджера"
              value="Комментарий"
            />
          </div>
        </form>
      )}
    </>
  );
}

export default AmbasadorsCard;
