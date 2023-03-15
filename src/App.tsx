import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { InterviewAvailability } from './design-system/interview-availability';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <InterviewAvailability />
    </ThemeProvider>
  );
}
export default App;
