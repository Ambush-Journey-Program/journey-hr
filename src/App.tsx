import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Button } from '@ambush/ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button />
    </ThemeProvider>
  );
}
export default App;
