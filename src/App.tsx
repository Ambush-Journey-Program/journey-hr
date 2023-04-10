import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { HappyHourEdit } from './components/happy-hour-edit';
import { guestsList } from './components/happy-hour-edit/const';
import { Guest } from './components/happy-hour-edit/types';

function App() {
  function addGuest(updatedGuestList: Guest[]) {
    console.log({ updatedGuestList });
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HappyHourEdit
        guestsList={guestsList}
        maxGuests={4}
        addGuest={addGuest}
      ></HappyHourEdit>
    </ThemeProvider>
  );
}
export default App;
