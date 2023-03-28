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
  relatedLinks: {
    sections: [
      {
        title: 'Figma',
        links: [
          {
            text: 'Colors',
            url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=2%3A804&t=WcI5jns5q5TpQbxH-1',
            description: 'This is the Figma of the Colors and its variations.',
          },
        ],
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
