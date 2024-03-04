import './PopupFilter.scss';

import { useForm, SubmitHandler } from 'react-hook-form';

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
  SQL_for_data_science_and_analytics = 'SQL for data science and analytics',
  Business_analyst = 'Business_analyst',
  Web_developer = 'Web_developer',
  Java_developer = 'Java_developer',
  Product_manager_for_experienced_specialists = 'Product_manager_for_experienced_specialists',
  Test_Engineer_QA = 'Test_Engineer_QA',
  Control = 'Control',
  English = 'English',
  Commercial_illustrator = 'Commercial illustrator',
  Android_developer = 'Android_developer',
  UX_UI_designer = 'UX/UI designer',
  Critical_thinking = 'Critical thinking',
}

interface IFormInput {
  courses: Courses;
  gender: GenderEnum;
}

function PopupFilter() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="popup">
      <div className="popup__main">
        <form className="popup__form" onSubmit={handleSubmit(onSubmit)}>
          <label>Курс</label>
          <select {...register('courses')}>
            <option value="female">Ж</option>
            <option value="male">М</option>
          </select>
          <label>Пол</label>
          <select {...register('gender')}>
            <option value="female">Ж</option>
            <option value="male">М</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default PopupFilter;
