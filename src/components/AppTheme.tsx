import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

const theme = createMuiTheme({
  shape: {
    borderRadius: 0
  },
  palette: {
    primary: {
      // light: 'rgba(247, 240, 149, 1)',
      main: 'rgba(240, 226, 30, 1)'
      // dark: 'rgba(238, 183, 8, 1)'
    },
    secondary: {
      // light: 'rgba(188, 230, 251, 1)',
      main: 'rgba(81, 171, 247, 1)'
      // dark: 'rgba(31, 69, 189, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    }
  }
});

function AppTheme(props: { children: ReactNode }) {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default AppTheme;
