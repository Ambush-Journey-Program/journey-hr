import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { RadioButton } from './components/ui/radio-button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RadioButton option1={'Medium'} option2={'Large'}></RadioButton>
    </ThemeProvider>
  );
}
export default App;
