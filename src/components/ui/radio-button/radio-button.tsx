import { useState } from 'react';
import * as Styled from './radio-button.styled';
import { RadioButtonProps } from './types';

export function RadioButton({
  option2,
  optionDefault,
  fontWeight = 'hair',
  disabled = false,
}: RadioButtonProps) {
  function optionChange(e) {
    console.log(e.target.value);
  }
  return (
    <Styled.containerRadio>
      <Styled.containerInput>
        <Styled.radioInput
          type="radio"
          name="select"
          id={optionDefault}
          value={optionDefault}
          checked
          onChange={optionChange}
          disabled={disabled}
        />
        <Styled.containerLabel htmlFor={optionDefault} disabled={disabled}>
          <Styled.paragraphLabel
            colorVariant="dark"
            size="medium"
            fontWeight={fontWeight}
          >
            {optionDefault}
          </Styled.paragraphLabel>
        </Styled.containerLabel>
      </Styled.containerInput>

      <Styled.containerInput>
        <Styled.radioInput
          type="radio"
          name="select"
          id={option2}
          value={option2}
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
      </Styled.containerInput>
    </Styled.containerRadio>
  );
}
