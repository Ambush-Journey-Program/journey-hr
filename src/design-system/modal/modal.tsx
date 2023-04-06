import { Button } from '@/design-system';
import { Title } from '@/design-system/typography/title/title.styled';
import { ModalProps } from './types';
import * as Styled from './modal.styled';
import { useEffect } from 'react';

export function Modal({
  onConfirm,
  onClose,
  title,
  children,
  cancelButtonText,
  confirmButtonText,
}: ModalProps) {
  useEffect(() => {
    const onClickOutside = (event: any) => {
      if (!event.target?.closest('#modal')) {
        onClose();
      }
    };

    window.addEventListener('click', onClickOutside, true);
    return () => window.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <Styled.ModalScreen>
      <Styled.ModalBox id="modal" data-testid="modal">
        <Button
          className="closeButton"
          color="blue"
          icon="XMarkIcon"
          onClick={onClose}
          aria-label="Close Button"
        />

        <Title className="title" variant="h2">
          {title}
        </Title>

        <Styled.ModalChildren>{children}</Styled.ModalChildren>
        <Styled.ModalButton>
          <Button
            aria-label="Cancel Button"
            variant="outlined"
            color="blue"
            onClick={onClose}
          >
            {cancelButtonText}
          </Button>
          <Button aria-label="Confirm Button" onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </Styled.ModalButton>
      </Styled.ModalBox>
      <Styled.ModalLayer tabIndex={-1} data-testid="CloseButton" />
    </Styled.ModalScreen>
  );
}
