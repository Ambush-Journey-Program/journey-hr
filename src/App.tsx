import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { RequestTimeOffContent } from './components/request-time-off';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RequestTimeOffContent />
    </ThemeProvider>
  );
}
export default App;
