import './AmbasadorsCard.scss';

function AmbasadorsCard() {
  return (
    <form className="card-ambasadors">
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
  );
}

export default AmbasadorsCard;
