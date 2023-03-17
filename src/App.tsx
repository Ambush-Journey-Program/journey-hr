import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import {
  Title,
  Subtitle,
  Paragraphs,
} from '../src/design-system/typography/typography';
import { CardWrapper } from './design-system/card-wrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CardWrapper>
        <Title titleVariant="h1">H1 Test</Title>
      </CardWrapper>
      <CardWrapper>
        <Title titleVariant="h2">H2 Test</Title>
      </CardWrapper>
      <CardWrapper>
        <Title titleVariant="h3">H3 Test</Title>
      </CardWrapper>
      <CardWrapper>
        <Title titleVariant="h4">H4 Test</Title>
      </CardWrapper>
      <CardWrapper>
        <Title titleVariant="h5">H5 Test</Title>
      </CardWrapper>
      <CardWrapper>
        <Title titleVariant="h6">H6 Test</Title>
      </CardWrapper>
      <CardWrapper>
        <Subtitle subtitleVariant="s1">Subtitle-1 Test</Subtitle>
      </CardWrapper>
      <CardWrapper>
        <Subtitle subtitleVariant="s2">Subtitle-2 Test</Subtitle>
      </CardWrapper>
      <CardWrapper>
        <Subtitle subtitleVariant="s3">Subtitle-3 Test</Subtitle>
      </CardWrapper>
      <CardWrapper>
        <Subtitle subtitleVariant="s4">Subtitle-4 Test</Subtitle>
      </CardWrapper>
      <CardWrapper>
        <Subtitle subtitleVariant="s5">Subtitle-5 Test</Subtitle>
      </CardWrapper>
      <CardWrapper>
        <Subtitle subtitleVariant="s6">Subtitle-6 Test</Subtitle>
      </CardWrapper>
      <CardWrapper>
        <Paragraphs sizeVariant="large" fontWeight="light">
          Test
        </Paragraphs>
      </CardWrapper>
    </ThemeProvider>
  );
}
export default App;
