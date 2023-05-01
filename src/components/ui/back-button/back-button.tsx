import { BackBtn } from './back-button.styled';
import { BackButtonProps } from './types';

export function BackButton({ disabled = false, onClick }: BackButtonProps) {
  return (
    <BackBtn
      onClick={onClick}
      disabled={disabled}
      sizeVariant="small"
      variant="iconBtn"
      icon="ChevronLeftIcon"
      color="purple"
    >
      Back
    </BackBtn>
  );
}
