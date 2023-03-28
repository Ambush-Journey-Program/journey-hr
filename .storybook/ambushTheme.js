// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#EC6D75',

  // UI
  appBg: 'white;',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Lato,Helvetica,sans-serif',
  fontCode: 'Lato,Helvetica,sans-serif',

  // Text colors
  textColor: '#45365a',
  textInverseColor: '#5c4c73',

  // Toolbar default and active colors
  barTextColor: '#45365a',
  barSelectedColor: '#ec6d75',
  barBg: 'linear-gradient(0deg, #FCFBF8 0%, #F7F3EE 100.74%)',

  // Form colors
  inputBg: 'white;',
  inputBorder: '#e6e6e6',
  inputTextColor: '45365a',
  inputBorderRadius: 4,

  brandTitle: 'Ambush',
  brandUrl: 'https://www.getambush.com/',
  brandImage: 'src/design-system/logo/images/horizontal.svg',
  brandTarget: '_self',
});
