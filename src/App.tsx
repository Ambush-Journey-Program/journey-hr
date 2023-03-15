import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Button } from './design-system/button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button variant="outlined">button</Button>
      <Button color="blue" variant="outlined">
        button
      </Button>
    </ThemeProvider>
  );
}
export default App;
