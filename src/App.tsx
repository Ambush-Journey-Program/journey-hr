import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Calendar } from './design-system/calendar/calendar';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Calendar></Calendar>
    </ThemeProvider>
  );
}
export default App;
