import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Tooltip } from './design-system/tooltip';
import { TooltipTarget } from './design-system/tooltip/tooltip.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Tooltip text="Hello World" position="Top">
        {' '}
        <TooltipTarget>I am a Target</TooltipTarget>
      </Tooltip>
    </ThemeProvider>
  );
}
export default App;
