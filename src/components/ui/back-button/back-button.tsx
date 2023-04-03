import { BackBtn } from './back-button.styled';
import { BackButtonProps } from './types';

export function BackButton({ disabled, onClick }: BackButtonProps) {
  return (
    <BackBtn
      onClick={onClick}
      disabled={disabled}
      variant="ghost"
      sizeVariant="small"
      icon="ChevronLeftIcon"
    >
      Back
    </BackBtn>
  );
}
