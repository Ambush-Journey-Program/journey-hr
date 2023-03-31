import { BackBtn } from './back-button.styled';
import Chevron from './assets/chevron-icon.svg';
import { useState } from 'react';
import { IBackButtonProps } from './types';

export function BackButton({ children = 'Back' }: IBackButtonProps) {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    setDisabled(true);
  };
  return (
    <BackBtn onClick={handleClick} disabled={disabled}>
      <img src={Chevron} alt="chevron-left image" />
      {children}
    </BackBtn>
  );
}
