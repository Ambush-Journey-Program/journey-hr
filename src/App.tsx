import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Tooltip } from './design-system/tooltip';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Tooltip text="Copied" children={'Hover me'}></Tooltip>
    </ThemeProvider>
  );
}
export default App;
