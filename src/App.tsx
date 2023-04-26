import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { TextAreaRequestReason } from './components/request-time-off/time-of-reason-text-area/reason-text-area';
import { CardWrapper } from './design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />{' '}
      <CardWrapper>
        <TextAreaRequestReason />
      </CardWrapper>
    </ThemeProvider>
  );
}
export default App;
