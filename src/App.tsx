import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { SelectInput } from './design-system/select-input';

const options: Option[] = [
  {
    label: 'Text',
    value: 'text-value'
  },
  {
    label: 'Text',
    value: 'text-value'
  },
  {
    label: 'Text',
    value: 'text-value'
  },
  {
    label: 'Text',
    value: 'text-value'
  },
  {
    label: 'Text',
    value: 'text-value'
  },
  {
    label: 'Text',
    value: 'text-value'
  }
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SelectInput 
      title= "Title" 
      placeholder='Selecione uma opção...'
      options={options}
      />
    </ThemeProvider>
  );
}

export default App;
