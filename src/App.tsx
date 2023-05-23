import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
// import { HappyHourSchedule } from './components/happy-hour-schedule';
import { PageTimeOff } from './components/page-time-off';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <HappyHourSchedule></HappyHourSchedule> */}
      <PageTimeOff></PageTimeOff>
    </ThemeProvider>
  );
}
export default App;
