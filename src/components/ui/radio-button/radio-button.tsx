import { useState } from 'react';
import * as Styled from './radio-button.styled';
import { RadioButtonProps } from './types';

export function RadioButton({
  option1,
  option2,
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
      <div>
        <Styled.itemRadio>
          <Styled.radioInput
            type="radio"
            name="select"
            value={option1}
            checked={radioSelected === option1}
            onChange={optionChange}
            disabled={disabled}
          />
          <Styled.containerLabel htmlFor={option1} disabled={disabled}>
            <Styled.paragraphLabel
              colorVariant="dark"
              size="medium"
              fontWeight={fontWeight}
            >
              {option1}
            </Styled.paragraphLabel>
          </Styled.containerLabel>
        </Styled.itemRadio>
      </div>
      <div>
        <Styled.itemRadio>
          <Styled.radioInput
            type="radio"
            name="select"
            value={option2}
            checked={radioSelected === option2}
            onChange={optionChange}
            disabled={disabled}
          />
          <Styled.containerLabel htmlFor={option2} disabled={disabled}>
            <Styled.paragraphLabel
              colorVariant="dark"
              size="medium"
              fontWeight={fontWeight}
            >
              {option2}
            </Styled.paragraphLabel>
          </Styled.containerLabel>
        </Styled.itemRadio>
      </div>
    </Styled.containerRadio>
  );
}
