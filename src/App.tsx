import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { PageHeader } from './components/page-header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageHeader
        title="Happy Hour Schedule"
        subtitle="Chose the best dates to celebrate"
      />
    </ThemeProvider>
  );
}
export default App;
