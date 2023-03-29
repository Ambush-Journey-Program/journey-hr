import { ChangeEvent, useState } from 'react';
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
  type = 'text',
  name,
  onTextChange = () => {},
}: IInputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }
  return (
    <div>
      <Styled.Wrapper error={error}>
        <Styled.Label htmlFor={name} optional={optional}>
          {label} <span>Optional</span>
        </Styled.Label>
        <Styled.InputContainer
          error={error}
          disabled={disabled}
          touched={touched}
        >
          <input
            type={type}
            placeholder="Label"
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            onChange={onInputChange}
          />
        </Styled.InputContainer>
        {!!error && <span>{error}</span>}
      </Styled.Wrapper>
    </div>
  );
}
