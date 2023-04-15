import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { RadioButton } from './components/ui/radio-button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RadioButton
        optionDefault="optionDefault"
        option2={'option 2'}
        disabled={false}
      ></RadioButton>
    </ThemeProvider>
  );
}
export default App;
