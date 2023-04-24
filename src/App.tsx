import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { SegmentedControl } from './design-system/segmented-control';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SegmentedControl
        label={'Hello'}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      ></SegmentedControl>
    </ThemeProvider>
  );
}
export default App;
