import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/global.css';

import StyledComponentsRegistry from '@/lib/registry';
import { theme } from '@/styles/theme';

import '../styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
