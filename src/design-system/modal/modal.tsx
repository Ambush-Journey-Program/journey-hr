import { Button, Paragraph, Title } from '@ambush/ui';
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
    const onClickOutside = (event: MouseEvent) => {
      const isElement = event.target instanceof Element;

      if (!isElement) {
        return;
      }

      if (!event.target.closest('#modal')) {
        onClose();
      }
    };

    window.addEventListener('click', onClickOutside, true);
    return () => {
      window.removeEventListener('click', onClickOutside, true);
    };
  }, []);

  return (
    <Styled.ModalScreen>
      <Styled.ModalBox id="modal" role="dialog">
        <Button
          className="closeButton"
          color="secondary"
          icon="XMarkIcon"
          onClick={onClose}
          aria-label="Close Button"
        />
        <Styled.modalContent>
          <Title variant="h2">{title}</Title>
          <Paragraph size={'medium'} fontWeight={'semihair'}>{children}</Paragraph>
        </Styled.modalContent>
        <Styled.ModalFooter>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            {cancelButtonText}
          </Button>
          <Button onClick={onConfirm}>{confirmButtonText}</Button>
        </Styled.ModalFooter>
      </Styled.ModalBox>
      <Styled.ModalLayer tabIndex={-1} aria-hidden="true" />
    </Styled.ModalScreen>
  );
}
