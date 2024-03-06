import { useForm } from 'react-hook-form';

function AmbasadorsContainerSelect() {
  enum GenderEnum {
    new = 'new',
    Active = 'Active',
    to_be_confirmed = 'to_be_confirmed',
    on_pause = 'on_pause',
    Archive = 'Archive',
  }

  interface IFormInput {
    gender: GenderEnum;
  }

  const { register } = useForm<IFormInput>();

  return (
    <div className="ambasadors__container">
      <h1 className="ambasadors__title">Амбассадор</h1>
      <form className="status-ambasadors">
        <select {...register('gender')} className="popup__select-gender">
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
