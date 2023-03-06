import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global';
import { theme } from '../src/styles/theme';

const withGlobalStyle = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export const decorators = [withGlobalStyle];
