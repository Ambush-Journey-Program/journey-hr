import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global';
import { theme } from '../src/styles/theme';

export const parameters = {
  layout: 'centered',
  colorPicker: {
    primaryPalette: 'Brand Colors', // Name of primary palette for all components and its stories. Optional (fallback to first palette from the palettes array).
    palettes: [
      {
        name: 'Solid Colors', // string
        palette: theme.color, // Palette as an Object or an Array. See bellow.
      },
    ],
  },
};

const withGlobalStyle = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export const decorators = [withGlobalStyle];
