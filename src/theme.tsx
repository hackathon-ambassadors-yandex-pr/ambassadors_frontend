import { createTheme, responsiveFontSizes } from '@mui/material';

const colors = {
  black: {
    '900': '#1a1b22',
    '500': '#797981',
    '300': '#b5b5b7',
    '100': '#dde0e4',
  },
  gray: '#f9fafb',
  white: '#ffffff',
  blue: '#5a9bff',
  'blue-main': '#1d6bf3',
  'blue-bg': '#f1f6ff',
  'blue-light': '#acccff',
  red: '#ff0200',
  green: '#87cc9e',
  'green-light': '#c2e5ce',
  purple: '#7f67d2',
  'purple-light': '#ccc2ed',
  orange: '#ffce92',
  'orange-light': '#ffe1bd',
  rose: '#ffdde5',
  yellow: '#fff9d3',
  pink: '#ffbffd',
  brown: '#a99175',
};

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: colors.blue,
        // light:#42a5f5
        // dark:#1565c0
        // contrastText:#fff
      },
      error: {
        main: colors.red,
      },
      text: {
        // primary:,
        // secondary:,
        // disabled
      },
    },
    typography: {
      fontFamily: '"YS Display", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: 34,
        fontWeight: 400,
        lineHeight: 1.17647,
      },
      h2: {
        fontSize: 28,
        fontWeight: 400,
        lineHeight: 1.28571,
      },
      h3: {
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 1.33333,
      },
      h4: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.2,
      },
      subtitle1: {
        fontFamily: '"YS Text", "Helvetica", "Arial", sans-serif',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.33333,
      },
      body1: {
        fontFamily: '"YS Text", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.25,
      },
      body2: {
        fontFamily: '"YS Text", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.42857,
      },
    },
  })
);

export default theme;
