const REQUIRED_FIELD = 'Обязательно для заполнения';

export const emailValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Email не может содержать русские буквы';
    } else if (
      !value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return 'Не правильный формат Email';
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль должен быть длиннее 6-ти символов';
    }

    return true;
  },
};
