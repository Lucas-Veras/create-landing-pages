import React from 'react';
import { GlobalStyles } from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const MyThemeProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyThemeProvider;
