import { BackBtn } from './back-button.styled';
import Chevron from './assets/chevron-icon.svg';
import { useState } from 'react';

export function BackButton() {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    setDisabled(true);
  };
  return (
    <>
      <BackBtn onClick={handleClick} disabled={disabled}>
        <img src={Chevron} alt="chevron-left image" />
        Back
      </BackBtn>
    </>
  );
}
