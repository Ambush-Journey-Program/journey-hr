import { useState } from 'react';
import * as Styled from './radio-button.styled';
import { RadioButtonProps } from './types';

export function RadioButton({
  value,
  fontWeight = 'hair',
  disabled = false,
  checked = false,
  label,
  name,
}: RadioButtonProps) {
  function optionChange(e) {
    console.log(e.target.value);
  }
  return (
    <Styled.containerRadio>
      <Styled.containerInput>
        <Styled.radioInput
          type="radio"
          name={name}
          id={value}
          value={value}
          {...(checked && { checked: true })}
          onChange={optionChange}
          disabled={disabled}
        />
        <Styled.containerLabel htmlFor={value} disabled={disabled}>
          <Styled.paragraphLabel
            colorVariant="dark"
            size="medium"
            fontWeight={fontWeight}
          >
            {label}
          </Styled.paragraphLabel>
        </Styled.containerLabel>
      </Styled.containerInput>
    </Styled.containerRadio>
  );
}
