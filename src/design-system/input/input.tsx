import { ChangeEvent, useState } from 'react';
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
  type = 'text',
  name,
  placeholder = 'Label',
  onTextChange = () => {},
}: IInputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }
  return (
    <Styled.Wrapper error={error}>
      <Styled.Label htmlFor={name}>
        {label} {required && <span>Required</span>}
      </Styled.Label>
      <Styled.InputContainer
        error={error}
        disabled={disabled}
        touched={touched}
      >
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onInputChange}
          data-testid="input-test"
        />
      </Styled.InputContainer>
      {!!error && (
        <Paragraphs size="extrasmall" fontWeight="light" colorVariant="red">
          {error}
        </Paragraphs>
      )}
    </Styled.Wrapper>
  );
}
