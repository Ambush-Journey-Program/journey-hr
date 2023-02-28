import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Tooltip } from './design-system/tooltip';
import { TooltipTarget } from './design-system/tooltip/tooltip.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Tooltip text="Copied!" position="Top">
        {' '}
        <TooltipTarget></TooltipTarget>
      </Tooltip>
    </ThemeProvider>
  );
}
export default App;
