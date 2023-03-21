import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Calendar } from './design-system/calendar/calendar';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="412217370844-lilgs9rb0vj31pcqn4bcrr1oiikpoods.apps.googleusercontent.com">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Calendar></Calendar>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
export default App;
