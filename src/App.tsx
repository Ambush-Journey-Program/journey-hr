import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { InterviewAvailability } from './components/interview-availability';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <InterviewAvailability></InterviewAvailability>
    </ThemeProvider>
  );
}
export default App;
