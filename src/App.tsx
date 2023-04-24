import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { SegmentedControl } from './design-system/segmented-control';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SegmentedControl
        fontWeight="light"
        icon="AcademicCapIcon"
        labelSize="default"
        label={'search'}
      ></SegmentedControl>
    </ThemeProvider>
  );
}
export default App;
