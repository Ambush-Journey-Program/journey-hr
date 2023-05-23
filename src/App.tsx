import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { HappyHourSchedule } from './components/happy-hour-schedule';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HappyHourSchedule></HappyHourSchedule>
    </ThemeProvider>
  );
}
export default App;
