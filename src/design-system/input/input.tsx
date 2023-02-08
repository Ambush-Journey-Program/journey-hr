import * as Styled from "./input.styled"
import { IInputProps } from "./types"

export function Input({ label, ...props }: IInputProps) {
  return (
    <div>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input {...props} />
    </div>
  )
}
