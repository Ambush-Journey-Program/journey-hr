import * as Styled from "./input.styled"
import { IInputProps } from "./types"

export function Input({ label, required, ...props }: IInputProps) {
  const { name, error } = props

  return (
    <div>
      <Styled.Wrapper error={error}>
        <Styled.Label htmlFor={name}>{label}</Styled.Label>
        <Styled.InputContainer>
          <input
            placeholder="Label"
            type="text"
            onChange={() => console.log("AQUI")}
          />
        </Styled.InputContainer>
        {!!error && <span>{error}</span>}
      </Styled.Wrapper>
    </div>
  )
}
