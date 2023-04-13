import { useState } from 'react';
import * as Styled from './radio-button.styled';
import { RadioButtonProps } from './types';

export function RadioButton({
  optionsLabel,
  fontWeight = 'hair',
  disabled = false,
}: RadioButtonProps) {
  const [radioSelected, setRadioSelected] = useState('');

  function optionChange(e) {
    setRadioSelected(e.target.value);
    console.log(radioSelected);
  }
  [radioSelected];

  return (
    <Styled.containerRadio>
      {optionsLabel.map((name, index) => (
        <Styled.itemRadio key={index}>
          <Styled.radioInput
            type="radio"
            name="topping"
            value={name}
            id={name}
            checked={radioSelected === name}
            onChange={optionChange}
            disabled={disabled}
          />
          <Styled.containerLabel htmlFor={name} disabled={disabled}>
            <Styled.paragraphLabel
              colorVariant="dark"
              size="medium"
              fontWeight={fontWeight}
            >
              {name}
            </Styled.paragraphLabel>
          </Styled.containerLabel>
        </Styled.itemRadio>
      ))}
    </Styled.containerRadio>
  );
}
