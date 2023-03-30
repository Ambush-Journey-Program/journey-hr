import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { InterviewAvailability } from './components/interview-availability';
import { Badge } from './design-system/badge';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Badge text="Teste 123"></Badge>
    </ThemeProvider>
  );
}
export default App;
