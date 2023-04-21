import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Balance } from './components/balance';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Balance />
    </ThemeProvider>
  );
}
export default App;
