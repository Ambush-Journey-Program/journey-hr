import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Doodles } from './design-system/doodles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Doodles src=".spinning_arrow" fill="red"></Doodles>
    </ThemeProvider>
  );
}
export default App;
