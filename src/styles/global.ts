import { createGlobalStyle } from 'styled-components';

import './reset.css';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  body, input, button, select, span {
    font-family:Arial, Helvetica, sans-serif;
  }
`;
