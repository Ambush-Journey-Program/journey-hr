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
  name,
  ref,
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
            ref={ref}
            type="text"
            placeholder={placeholder ?? 'Label'}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            onChange={(e) => onTextChange(e.target.value)}
          ></input>
        </Styled.InputContainer>
        {!!error && <span>{error}</span>}
      </Styled.Wrapper>
    </div>
  );
}
