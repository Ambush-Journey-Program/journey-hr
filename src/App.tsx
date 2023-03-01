import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { NavBar } from './design-system/navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
    </ThemeProvider>
  );
}
export default App;
