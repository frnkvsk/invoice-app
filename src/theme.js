import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      light_bg: '#F8F8FB',
      dark_1: '#0C0E16',
      dark_2: '#141625',
      dark_3: '#1E2139',
      dark_4: '#252945',
      invoice_paid: '#4DD1A6',
      invoice_paid_light: '#4DD1A615',
      invoice_pending: '#FC910D',
      invoice_pending_light: '#FC910D13',
      invoice_draft: '#41485E',
      invoice_draft_light: '#41485E10'
    },
    primary: {
      main: '#7C5DFA',
      light: '#9277FF'
    },
    secondary: {
      main: '#888EB0',
      light: '#DFE3FA',
      dark: '#7E88C3',
    },    
    warning: {
      main: '#EC5757',
    },
    info: {
      main: '#FF9797',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {    
    h1: {
      fontFamily: 'Spartan',
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '36px',
      letterSpacing: -1,
    },
    h2: {
      fontFamily: 'Spartan',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '22px',
      letterSpacing: -0.63
    },
    h3: {
      fontFamily: 'Spartan',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: -0.8
    },
    body1: {
      fontFamily: 'Spartan',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',
      letterSpacing: 0.25
    },
    body2: {
      fontFamily: 'Spartan',
      fontWeight: 500,
      fontSize: '11px',
      lineHeight: '15px',
      letterSpacing: -0.23
    },
    subtitle1: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: '0.9rem',
      color: 'green',
      lineHeight: 1.1,
    },
    subtitle2: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      fontSize: '0.9rem',
      color: 'silver',
      lineHeight: 1.5,
    }
  },
});

export { theme };