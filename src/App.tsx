import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Tooltip } from './design-system/tooltip';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Tooltip position="right" text={'Copied!'}>
        Right
      </Tooltip>
      <Tooltip position="left" text={'Copied!'}>
        left
      </Tooltip>
      <Tooltip position="top" text={'Copied!'}>
        top
      </Tooltip>
      <Tooltip position="bottom" text={'Copied!'}>
        bottom
      </Tooltip>
      <Tooltip text={'Copied!'}>Padrao</Tooltip>
    </ThemeProvider>
  );
}
export default App;
