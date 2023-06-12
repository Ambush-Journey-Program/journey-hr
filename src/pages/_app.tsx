import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import { theme } from '@/styles/theme';
import { Layout } from '@ambush/ui';
import '../styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
      <style jsx global>{`
        html {
          font-family: ${theme.font.fontFamilyTitle};
        }
      `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
