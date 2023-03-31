import { BackBtn } from './back-button.styled';
import { ReactComponent as ChevronLeft } from './assets/chevron-icon.svg';
import { useState } from 'react';
import { IBackButtonProps } from './types';

export function BackButton({}: IBackButtonProps) {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    setDisabled(true);
  };
  return (
    <BackBtn onClick={handleClick} disabled={disabled}>
      <ChevronLeft />
      Back
    </BackBtn>
  );
}
