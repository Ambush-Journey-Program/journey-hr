import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Avatar } from './design-system/avatar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Avatar src="https://i.pinimg.com/originals/08/e9/78/08e978b4dfb432466d87d45b3df6f9fc.jpg" />
    </ThemeProvider>
  );
}
export default App;
