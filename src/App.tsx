import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Balance } from './components/balance';
import { employees } from './components/balance/mocking/holidays';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Balance
        employees={employees}
        buttonClick={() => {
          console.log('teste');
        }}
        buttonText="teste"
      />
    </ThemeProvider>
  );
}
export default App;
