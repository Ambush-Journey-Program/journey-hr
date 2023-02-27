import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import CardWrapper from './design-system/card-wrapper/cardWrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CardWrapper colorVariant="transparent">teste</CardWrapper>
      <CardWrapper colorVariant="default">teste</CardWrapper>
    </ThemeProvider>
  );
}
export default App;
