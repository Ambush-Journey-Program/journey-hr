import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { HappyHourEdit } from './components/happy-hour-edit';
import { guestsListData } from './components/happy-hour-edit/const';
import { Employees, Guest } from './components/happy-hour-edit/types';

function App() {
  function addGuest(
    updatedGuestList: Guest[],
    updatedEmployeeList: Employees[],
  ) {
    console.log({ updatedGuestList, updatedEmployeeList });
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HappyHourEdit
        guestsListData={guestsListData}
        maxGuests={6}
        addGuest={addGuest}
      ></HappyHourEdit>
    </ThemeProvider>
  );
}
export default App;
