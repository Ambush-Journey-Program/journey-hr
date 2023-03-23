import { useState } from 'react';
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
  placeholder,
  type,
  name,
  onTextChange = () => {},
}: IInputProps) {
  const [touched, setTouched] = useState(false);
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
            placeholder={placeholder ?? 'Label'}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            onChange={(e) => {
              onTextChange(e.target.value);
              setTouched(true);
            }}
          ></input>
        </Styled.InputContainer>
        {!!error && <span>{error}</span>}
      </Styled.Wrapper>
    </div>
  );
}
