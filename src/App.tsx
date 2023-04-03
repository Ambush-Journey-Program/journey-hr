import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { ShortHappyHourWrapper } from './design-system/short-happy-hour-wrapper';
import { date, title } from './design-system/short-happy-hour-wrapper/const';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShortHappyHourWrapper
        childrenAppointment={title}
        childrenDate={date}
      ></ShortHappyHourWrapper>
    </ThemeProvider>
  );
}
export default App;
