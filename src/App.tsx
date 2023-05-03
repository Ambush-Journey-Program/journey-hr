import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { SelectEmployee } from './pages/select-employee';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SelectEmployee />
    </ThemeProvider>
  );
}
export default App;
