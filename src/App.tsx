import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Balance } from './components/balance';
import { employees } from './components/balance/mocking/holidays';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Balance
          employees={employees}
          buttonClick={() => {
            console.log('teste');
          }}
          buttonText="View Time Off"
          currentUser={false}
        />
        <br />
        <Balance employees={employees} currentUser={false} />
        <br />
        <Balance employees={employees} currentUser={true} />
        <br />
        <Balance employees={employees[2]} currentUser={false} />
        <br />
      </div>
    </ThemeProvider>
  );
}
export default App;
