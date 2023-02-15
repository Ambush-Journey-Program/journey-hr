import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { SelectInput } from './design-system/select-input';

const options = [
  {
    label: 'Text 1',
    value: '1',
  },
  {
    label: 'Text 2',
    value: '2',
  },
  {
    label: 'Text 3',
    value: '3',
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SelectInput title="Title" options={options} />
    </ThemeProvider>
  );
}

export default App;
