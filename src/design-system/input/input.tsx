import * as Styled from "./input.styled"
import { IInputProps } from "./types"

export function Input({ label, readOnly, ...props }: IInputProps) {
  const { name } = props

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.InputContainer readOnly={readOnly}>
        <input
          placeholder="Label"
          type="text"
          onChange={() => console.log("AQUI")}
          readOnly={readOnly}
        />
      </Styled.InputContainer>
    </Styled.Wrapper>
  )
}
