import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import useSWR from 'swr';
import { fetchPeople, fetchVacationPeriod } from './fetchers/fetchers';

function App() {
  const { data, error, isLoading } = useSWR(
    '/api/vacation-period',
    fetchVacationPeriod,
  );

  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useSWR('/api/people', fetchPeople);

  console.log({ data, error, isLoading });
  console.log({ data2, error2, isLoading2 });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default App;
