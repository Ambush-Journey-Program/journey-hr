import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Tooltip } from './design-system/tooltip';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Tooltip text="Copied asudhuashduhasuhuahsuhdsuhu!" position="right">
        <button>Right</button>
      </Tooltip>
      <Tooltip text="Copied asudhuashduhasuhuahsuhdsuhu!" position="left">
        <button>Left</button>
      </Tooltip>
      <Tooltip text="Copied asudhuashduhasuhuahsuhdsuhu!" position="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip text="Copied asudhuashduhasuhuahsuhdsuhu!" position="top">
        <button>Top</button>
      </Tooltip>

      <Tooltip text="Copied asudhuashduhasuhuahsuhdsuhu!">
        <button>Padrão</button>
      </Tooltip>
    </ThemeProvider>
  );
}
export default App;
