import { Button } from '@/design-system';
import { Title } from '@/design-system/typography/title/title.styled';
import { ModalProps } from './types';
import * as Styled from './modal.styled';

export function Modal({
  onConfirm,
  isOpen = false,
  onClose,
  title,
  children,
  cancelButtonText,
  confirmButtonText,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Styled.ModalScreen>
      <Styled.ModalBox data-testid="modal">
        <Button
          className="closeButton"
          color="blue"
          icon="XMarkIcon"
          onClick={onClose}
        />
        <Title className="title" variant="h2">
          {title}
        </Title>
        {children}
        <Styled.ModalButton>
          <Button
            variant="outlined"
            color="blue"
            onClick={onClose}
            data-testid="CancelButton"
          >
            {cancelButtonText}
          </Button>
          <Button onClick={onConfirm} data-testid="ConfirmButton">
            {confirmButtonText}
          </Button>
        </Styled.ModalButton>
      </Styled.ModalBox>
      <Styled.ModalLayer onClick={onClose} data-testid="CloseButton" />
    </Styled.ModalScreen>
  );
}
