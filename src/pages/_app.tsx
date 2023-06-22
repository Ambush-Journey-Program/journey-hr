import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import { theme } from '@/styles/theme';
import '../styles/reset.css';
import { Layout } from '@/layouts/layout/layout';
import { RequestSuccessful } from './request-successful';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <RequestSuccessful/>
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
