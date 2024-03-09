import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';
import { emailValidation, passwordValidation } from './validate.ts';
import Copyright from '../Copyright/Copyright';

import authLogo from '../../images/auth-logo.svg';
import './Login.scss';

interface LoginProps {
  onLoggedIn: (loggedIn: boolean) => void;
}

interface ISignInFields {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  password: string;
}

const userArray: IUser[] = [
  {
    email: 'admin@mail.com',
    password: '123456',
  },
  {
    email: 'test@mail.com',
    password: '123456',
  },
];

/**
 *
 * @param onLoggedIn - Функция установки состояния пользователя при успешной авторизации
 * @constructor
 */
const Login = ({ onLoggedIn }: LoginProps) => {
  const defaultTheme = createTheme();
  const methods = useForm<ISignInFields>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { control, handleSubmit, setError } = methods;

  const { errors } = useFormState({
    control,
  });

  const setLogin = () => {
    // console.log("setLogin")
    console.log(onLoggedIn);
    onLoggedIn(true);
  };

  const checkUser = (email: string, password: string) => {
    return userArray.some((data: IUser) => {
      return data.email === email && data.password === password;
    });
  };

  const onSubmit: SubmitHandler<ISignInFields> = (data) => {
    checkUser(data.email.toLowerCase(), data.password.toLowerCase())
      ? setLogin()
      : setError('email', {
          type: 'custom',
          message: `Пользователь не найден или пароль введен не верно`,
        });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 38,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '456px',
          }}
        >
          <div>
            <a href="" target="_blank">
              <img src={authLogo} className="logo" alt="Логин" />
            </a>
          </div>
          <Typography
            component="h4"
            fontFamily="YS Display"
            color="var(--Main-Black-300, #B5B5B7)"
          >
            Войдите в аккаунт
          </Typography>
          <FormProvider {...methods}>
            <Box
              component="form"
              //onSubmit={() => null}
              onSubmit={handleSubmit(onSubmit)}
              //noValidate
              sx={{
                mt: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '390px',
              }}
            >
              <Controller
                name="email"
                control={control}
                rules={emailValidation}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Введите почту"
                    autoComplete="email"
                    onChange={onChange}
                    value={value}
                    autoFocus
                    sx={{ mt: 3, mb: 0 }}
                    error={!!errors.email?.message}
                    helperText={errors?.email?.message}
                  />
                )}
              />
              <Controller
                name="password"
                rules={passwordValidation}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    // name="password"
                    label="Введите пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    // font-family="YS Text"
                    sx={{ mt: 3, mb: 4 }}
                    onChange={onChange}
                    value={value}
                    error={!!errors.password?.message}
                    helperText={errors?.password?.message}
                  />
                )}
              />

              <Grid container>
                <Grid item xs>
                  <Link
                    underline="none"
                    fontFamily="YS Display"
                    fontSize={'20px'}
                    lineHeight={'24px'}
                    fontWeight={'400'}
                    href="#"
                    variant="caption"
                    color="var(--Main-Blue-main, #5A9BFF)"
                  >
                    Не помню пароль
                  </Link>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Button
                  type="submit"
                  size="small"
                  disableElevation={true}
                  variant="contained"
                  //onClick={() => handleSubmit(submit)}
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: '248px',
                    height: '48px',
                    background: 'var(--Main-Blue-main, #5A9BFF)',
                    textTransform: 'capitalize',
                  }}
                >
                  Войти
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
export default Login;
