import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { GuestsAppointment } from './design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GuestsAppointment
        groupNum={'hello word'}
        guests={'Barbara'}
      ></GuestsAppointment>
    </ThemeProvider>
  );
}
export default App;
