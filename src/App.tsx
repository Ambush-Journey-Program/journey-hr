import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Guests } from './components/happy-hour-edit-group /guest-list/types';
import { GuestList } from './components/happy-hour-edit-group /guest-list';

const lista: Guests[] = [
  {
    guest: {
      name: 'teste',
      team: 'teste',
    },
  },
  {
    guest: {
      name: 'teste2',
      team: 'teste2',
    },
  },
  {
    guest: {
      name: 'teste3',
      team: 'teste3',
    },
  },
  {
    guest: {
      name: 'teste4',
      team: 'teste4',
    },
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GuestList guestList={lista} />
    </ThemeProvider>
  );
}
export default App;
