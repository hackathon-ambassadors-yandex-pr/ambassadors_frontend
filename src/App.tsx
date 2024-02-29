import logo from '/logo.svg';
import './App.scss';
import { Button, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
}));

function App() {
  return (
    <>
      <img src={logo}></img>
      <div>Hello world</div>
      <Typography>Hello World T</Typography>
      <Typography variant="h1">H1 –YS Display Regular, 34/40</Typography>
      <Typography variant="h1" fontWeight={'medium'}>
        H1 –YS Display Regular, 34/40
      </Typography>
      <Typography variant="h2">H2 –YS Display Regular,24/40</Typography>
      <Typography variant="h3">H3 –YS Display Regular, 20/120</Typography>
      <Typography variant="h4">H4 –YS Display Regular, 20/120</Typography>
      <Typography variant="caption">
        caption –YS Display Regular, 20/120
      </Typography>
      <Typography variant="body1">body1 –YS Display Regular, 20/120</Typography>
      <Typography variant="body2">body2 –YS Display Regular, 20/120</Typography>
      <Typography variant="subtitle1">
        subtitle1 –YS Display Regular, 20/120
      </Typography>
      <Typography variant="subtitle2">
        subtitle2 –YS Display Regular, 20/120
      </Typography>
      <Button variant="text">Stock Button</Button>

      <Button variant="outlined">Stock Button</Button>

      <Button variant="contained">Stock Button</Button>
      <Button variant="contained" color="error">
        Stock Button
      </Button>
      <MyButton>My Button</MyButton>
    </>
  );
}

export default App;
