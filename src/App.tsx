import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
<<<<<<< HEAD
=======
      <HappyHourEdit
        guestsListData={guestsListData}
        maxGuests={10}
      ></HappyHourEdit>
>>>>>>> 80d5525 (Feat: start to do Tooltip.)
    </ThemeProvider>
  );
}
export default App;
