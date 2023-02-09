import * as Styled from "./input.styled"
import { IInputProps } from "./types"

export function Input({ label, error, ...props }: IInputProps) {
  const { name, readOnly } = props

  return (
    <div>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.InputContainer>
        <input
          // label="Title"
          placeholder="Label"
          type="text"
          onChange={() => console.log("AQUI")}
          required
        />
      </Styled.InputContainer>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.InputContainer>
        <input
          placeholder="Label"
          type="text"
          onChange={() => console.log("AQUI")}
          readOnly
        />
      </Styled.InputContainer>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.InputContainer>
        <input
          // label="Title"
          placeholder="Label"
          type="text"
          onChange={() => console.log("AQUI")}
          disabled
        />
      </Styled.InputContainer>
    </div>
  )
}
