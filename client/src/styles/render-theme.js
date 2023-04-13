import { render } from '@testing-library/react';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';

export const renderTheme = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>,
  );
};
