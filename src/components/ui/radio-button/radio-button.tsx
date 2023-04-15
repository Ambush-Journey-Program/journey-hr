import { useState } from 'react';
import * as Styled from './radio-button.styled';
import { RadioButtonProps } from './types';

export function RadioButton({
  option2,
  fontWeight = 'hair',
  disabled = false,
}: RadioButtonProps) {
  const [radioSelected, setRadioSelected] = useState('optionDefault');

  function optionChange(e) {
    setRadioSelected(e.target.value);
    console.log(radioSelected);
  }
  [radioSelected];

  return (
    <Styled.containerRadio>
      <Styled.containerInput>
        <Styled.radioInput
          type="radio"
          name="select"
          value="optionDefault"
          checked={radioSelected === 'optionDefault'}
          onChange={optionChange}
          disabled={disabled}
        />
        <Styled.containerLabel htmlFor="optionDefault" disabled={disabled}>
          optionDefault
        </Styled.containerLabel>
      </Styled.containerInput>

      <Styled.containerInput>
        <Styled.radioInput
          type="radio"
          name="select"
          value={option2}
          checked={radioSelected === option2}
          onChange={optionChange}
          disabled={disabled}
        />
        <Styled.containerLabel htmlFor={option2} disabled={disabled}>
          {option2}
        </Styled.containerLabel>
      </Styled.containerInput>
    </Styled.containerRadio>
  );
}
