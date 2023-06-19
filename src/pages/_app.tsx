import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import { theme } from '@/styles/theme';
import { Layout } from '@/layouts/layout';
import '../styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
