import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming';
import { GlobalStyles } from '../src/styles/global';
import { theme } from '../src/styles/theme';

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1200px',
      height: '1200px',
    },
  },
  tabletLarge: {
    name: 'Tablet Large',
    styles: {
      width: '992px',
      height: '1200px',
    },
  },

  tablet: {
    name: 'Tablet',
    styles: {
      width: '769px',
      height: '1200px',
    },
  },
  mobile: {
    name: 'mobile',
    styles: {
      width: '768px',
      height: '667px',
    },
  },
};

export const parameters = {
  viewport: { viewports: customViewports },
  layout: 'centered',
  colorPicker: {
    primaryPalette: 'Brand Colors',
    palettes: [
      {
        name: 'Solid Colors',
        palette: theme.color,
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
          {
            text: 'Shadows',
            url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=310%3A29354&t=WcI5jns5q5TpQbxH-1',
            description: 'This is the Figma of the Colors and its variations.',
          },
        ],
      },
    ],
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' },
  },
};

const withGlobalStyle = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export const decorators = [withGlobalStyle];
