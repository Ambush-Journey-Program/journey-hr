import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Button from './design-system/button/button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button>
Ola
</Button>
    </ThemeProvider>
  );
}

export default App;
