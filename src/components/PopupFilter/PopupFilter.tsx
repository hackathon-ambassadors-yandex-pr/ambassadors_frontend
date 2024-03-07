import React, { useState } from 'react';
import './PopupFilter.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

enum GenderEnum {
  female = 'female',
  male = 'male',
}

enum Courses {
  Date_Science_Specialist = 'Date_Science_Specialist',
  CplusPlus = 'C++',
  Data_Engineer = 'Data_Engineer',
  Python_developer = 'Python_developer',
  IT_recruiter = 'IT_recruiter',
  SQL_for_data_science_and_analytics = 'SQL_for_data_science_and_analytics',
  Business_analyst = 'Business_analyst',
  Web_developer = 'Web_developer',
  Java_developer = 'Java_developer',
  Product_manager_for_experienced_specialists = 'Product_manager_for_experienced_specialists',
  Test_Engineer_QA = 'Test_Engineer_QA',
  Control = 'Control',
  English = 'English',
  Commercial_illustrator = 'Commercial_illustrator',
  Android_developer = 'Android_developer',
  UX_UI_designer = 'UX/UI_designer',
  Critical_thinking = 'Critical_thinking',
  Full_stack_developer = 'Full_stack_developer',
  Project_Manager = 'Project_Manager',
  Marketing = 'Marketing',
  Graphic_Designer = 'Graphic_Designer',
  Work_communication = 'Work_communication',
  Advanced_GO_Developer = 'Advanced_GO_Developer',
  Middle_Python = 'Middle_Python',
  Algorithms_for_developers = 'Algorithms_for_developers',
  DevOps_for_Operations_and_Development = 'DevOps_for_Operations_and_Development',
  Product_design = 'Product_design',
  iOS_developer = 'iOS_developer,',
}

interface IFormInput {
  courses: Courses;
  gender: GenderEnum;
}

interface filterpopup {
  filterpopup: boolean;
  setfilterPopup: (value: boolean) => void;
  handlefilterpopup: (params: React.MouseEvent<HTMLElement>) => void;
}

function PopupFilter({
  filterpopup,
  setfilterPopup,
  handlefilterpopup,
}: filterpopup) {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate('test');
    setfilterPopup(false);
  };
  const [selectOpen, setSelectOpen] = useState(true);

  function handleSelectOpen() {
    setSelectOpen(!selectOpen);
  }

  return (
    <div className={filterpopup ? 'popup' : 'popup__none'}>
      <div className="popup__main">
        <form
          className={
            selectOpen ? 'popup__form' : 'popup__form popup__form_select-open'
          }
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="title">Фильтрация</h1>
          <button className="button-close" onClick={handlefilterpopup}></button>
          <p className="subtitle">Выберите курс и пол</p>
          <div className="popup__data">
            <div className="popup__course">
              <label className="popup__label">Курс</label>
              <select
                {...register('courses')}
                className="popup__select-course"
                onClick={handleSelectOpen}
              >
                <option value="Date_Science_Specialist">
                  Аналитик данных{' '}
                </option>
                <option value="CplusPlus">C++</option>
                <option value="Data_Engineer">Инженер данных</option>
                <option value="Python_developer">Python-разработчик</option>
                <option value="IT_recruiter">IT-рекрутер</option>
                <option value="SQL_for_data_science_and_analytics">
                  SQL для работы с данными и аналитики
                </option>
                <option value="Business_analyst">Бизнес-аналитик</option>
                <option value="Web_developer">Веб-разработчик</option>
                <option value="Java_developer">Java-разработчик</option>
                <option value="Product_manager_for_experienced_specialists">
                  Продукт-менеджер для специалистов с опытом
                </option>
                <option value="Test_Engineer_QA">
                  Инженер по тестированию (QA)
                </option>
                <option value="Control">Управление</option>
                <option value="English">Английский</option>
                <option value="mCommercial_illustratorale">
                  Коммерческий иллюстратор
                </option>
                <option value="Android_developer">Android-разработчик</option>
                <option value="UX/UI_designer">UX/UI-дизайнер</option>
                <option value="Critical_thinking">Критическое мышление</option>
                <option value="Full_stack_developer">
                  Фулстек разработчик
                </option>
                <option value="Critical_thinking">Менеджер проектов</option>
                <option value="Marketing">Маркетинг</option>
                <option value="Graphic_Designer">Графический дизайнер</option>
                <option value="Work_communication">Рабочая коммуникация</option>
                <option value="Graphic_Designer">Графический дизайнер</option>
                <option value="Work_communication">Рабочая коммуникация</option>
                <option value="Advanced_GO_Developer">
                  Продвинутый GO-разработчик
                </option>
                <option value="Middle_Python">Middle Python</option>
                <option value="Algorithms_for_developers">
                  Алгоритмы для разработчиков
                </option>
                <option value="DevOps_for_Operations_and_Development">
                  DevOps для эксплуатации и разработки
                </option>
                <option value="Product_design">Продуктовый дизайн</option>
                <option value="iOS_developer">IOS-разработчик</option>
              </select>
            </div>
            <div className="popup__course">
              <label className="popup__label">Пол</label>
              <select {...register('gender')} className="popup__select-gender">
                <option value="female">Ж</option>
                <option value="male">М</option>
              </select>
            </div>
          </div>
          <div className="popup__buttons">
            <input className="reset" type="reset" />
            <button className="save">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupFilter;
