import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Modal } from './design-system/modal';
import { useState } from 'react';
import { Button } from './design-system';

function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button onClick={handleOpen}>teste</Button>
      {open && (
        <Modal
          onConfirm={handleOpen}
          onClose={handleClose}
          title="teste"
          children="teste2"
          cancelButtonText="teste3"
          confirmButtonText="teste4"
        ></Modal>
      )}
    </ThemeProvider>
  );
}
export default App;
