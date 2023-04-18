import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { HappyHourEdit } from './components/happy-hour-edit';
import { guestsListData } from './components/happy-hour-edit/const';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HappyHourEdit
        guestsListData={guestsListData}
        maxGuests={10}
      ></HappyHourEdit>
    </ThemeProvider>
  );
}
export default App;
