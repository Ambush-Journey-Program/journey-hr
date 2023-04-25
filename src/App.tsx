import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { DaysList } from './components/days-list';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DaysList />
    </ThemeProvider>
  );
}
export default App;
