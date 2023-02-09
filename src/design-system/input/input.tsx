import * as Styled from "./input.styled"
import { IInputProps } from "./types"

export function Input({
  label,
  disabled,
  required,
  readOnly,
  error,
  optional,
  ...props
}: IInputProps) {
  const { name } = props

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name} optional={optional}>
        {label} <span>Optional</span>
      </Styled.Label>
      <Styled.InputContainer disabled={disabled}>
        <input
          placeholder="Label"
          type="text"
          onChange={() => console.log("AQUI")}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
        />
      </Styled.InputContainer>
    </Styled.Wrapper>
  )
}
