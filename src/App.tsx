import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { HappyHourEdit } from './components/happy-hour-edit';
import { guestsListData } from './components/happy-hour-edit/const';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <HappyHourEdit
        guestsListData={guestsListData}
        maxGuests={10}
      ></HappyHourEdit>
>>>>>>> 80d5525 (Feat: start to do Tooltip.)
=======
      <HappyHourEdit
        guestsListData={guestsListData}
        maxGuests={3}
        minGuests={2}
      ></HappyHourEdit>
>>>>>>> 86ac3de (Feat: adjusted margin button and number and created a default maxGuest.)
    </ThemeProvider>
  );
}
export default App;
