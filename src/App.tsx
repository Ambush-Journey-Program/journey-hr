import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { RadioButton } from './components/ui/radio-button';
import { mockLabel } from './components/ui/radio-button/const';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RadioButton optionsLabel={mockLabel}></RadioButton>
    </ThemeProvider>
  );
}
export default App;
