import { BackBtn } from './back-button.styled';
import { IBackButtonProps } from './types';

export function BackButton({ disabled, onClick }: IBackButtonProps) {
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
