import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { ShortHappyHourWrapper } from './design-system/short-happy-hour-wrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShortHappyHourWrapper
        label="name of the event"
        children={'hihi'}
      ></ShortHappyHourWrapper>
    </ThemeProvider>
  );
}
export default App;
