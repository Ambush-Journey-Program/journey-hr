import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { SelectPeriod } from './components/select-period';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SelectPeriod></SelectPeriod>
    </ThemeProvider>
  );
}
export default App;
