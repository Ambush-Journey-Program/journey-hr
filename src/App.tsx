import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Button } from './design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button icon="AcademicCapIcon"></Button>
      <Button
        icon="AdjustmentsVerticalIcon"
        color="alternative"
        ariaLabel="teste"
      >
        teste
      </Button>
    </ThemeProvider>
  );
}
export default App;
