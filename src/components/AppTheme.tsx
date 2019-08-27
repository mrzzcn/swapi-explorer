import React, { ReactNode, useState } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { PaletteType } from '@material-ui/core';

const background = {
  dark: {
    default: '#212121'
  },
  light: {
    default: '#ffffff'
  }
};

function AppTheme(props: {
  children: (params: { toggle: () => void }) => ReactNode;
}) {
  const [palette, setPalette] = useState<{
    type: PaletteType;
  }>({
    type: 'light'
  });

  const toggleDarkTheme = () => {
    let newPaletteType: PaletteType =
      palette.type === 'light' ? 'dark' : 'light';
    setPalette({
      type: newPaletteType
    });
  };

  const theme = createMuiTheme({
    shape: {
      borderRadius: 0
    },
    palette: {
      ...palette,
      background: background[palette.type],
      primary: {
        light: 'rgba(247, 240, 149, 1)',
        main: 'rgba(240, 226, 30, 1)',
        dark: 'rgba(238, 183, 8, 1)'
      },
      secondary: {
        light: 'rgba(188, 230, 251, 1)',
        main: 'rgba(81, 171, 247, 1)',
        dark: 'rgba(31, 69, 189, 1)'
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      }
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      {props.children({ toggle: toggleDarkTheme })}
    </MuiThemeProvider>
  );
}

export default AppTheme;
