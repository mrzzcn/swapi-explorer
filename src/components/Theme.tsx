import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

const theme = createMuiTheme({});

function Theme(props: { children: ReactNode }) {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default Theme;
