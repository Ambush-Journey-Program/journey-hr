import { useState } from 'react';
import { Paragraphs } from '../typography/paragraphs/paragraphs';
import * as Styled from './input.styled';
import { IInputProps } from './types';

export function Input({
  label,
  required,
  value,
  disabled,
  readOnly,
  error,
  optional,
  name,
  onTextChange = () => {},
}: IInputProps) {
  return (
    <div>
      <Styled.Wrapper error={error}>
        <Styled.Label htmlFor={name} optional={optional}>
          {label} <span>Optional</span>
        </Styled.Label>
        <Styled.InputContainer error={error} disabled={disabled}>
          <input
            placeholder="Label"
            type="text"
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            onChange={(e) => onTextChange(e.target.value)}
          />
        </Styled.InputContainer>
        {!!error && (
          <Paragraphs size="extrasmall" fontWeight="light" colorVariant="red">
            {error}
          </Paragraphs>
        )}
      </Styled.Wrapper>
    </div>
  );
}
