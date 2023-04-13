import { Paragraphs } from '@/design-system';
import { isDisabled } from '@testing-library/user-event/dist/types/utils';
import { SetStateAction, useState } from 'react';
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
            <Paragraphs size={'small'} fontWeight={fontWeight}>
              {name}
            </Paragraphs>
          </Styled.containerLabel>
        </Styled.itemRadio>
      ))}
    </Styled.containerRadio>
  );
}
