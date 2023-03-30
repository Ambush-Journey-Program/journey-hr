import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Modal from './components/modal/modal';
import { useState } from 'react';
import { Button } from './design-system';
import { Paragraph } from './design-system/typography/paragraphs/paragraphs.styled';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal
        title="Are you sure?"
        onClose={handleModalClose}
        onConfirm={handleModalClose}
        isOpen={isModalOpen}
        cancelButtonText="No, Edit Event"
        confirmButtonText="Yes, it`s done"
      >
        <Paragraph size="medium" colorVariant="dark" fontWeight="hair">
          Make sure that you are finished the creation of the even
        </Paragraph>
      </Modal>
    </ThemeProvider>
  );
}
export default App;
