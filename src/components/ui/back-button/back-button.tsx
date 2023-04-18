import { BackBtn } from './back-button.styled';
import { type BackButtonProps } from './types';

export function BackButton({ disabled = false, onClick }: BackButtonProps) {
  return (
    <BackBtn
      onClick={onClick}
      disabled={disabled}
      sizeVariant="small"
      variant="ghost"
      icon="ChevronLeftIcon"
    >
      Back
    </BackBtn>
  );
}
