import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { HappyHourEdit } from './components/happy-hour-edit';
import { listGuestsSort } from './components/happy-hour-edit/const';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HappyHourEdit guests={listGuestsSort} totalGuests={13}></HappyHourEdit>
    </ThemeProvider>
  );
}
export default App;
