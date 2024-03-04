import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import authLogo from '../../images/auth-logo.svg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="#">
        Справка и поддержка
      </Link>{' '}
      {'© 2001-2024, Яндекс'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '390px',
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Введите почту"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ mt: 3, mb: 0 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Введите пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mt: 3, mb: 4 }}
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
                disableElevation
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: '248px',
                  height: '48px',
                  background: 'var(--Main-Blue-main, #5A9BFF)',
                }}
              >
                Войти
              </Button>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 37, mb: 3 }} />
      </Container>
    </ThemeProvider>
  );
}
