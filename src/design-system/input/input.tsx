import * as StyledInput from "./input.styled"
import { IInputProps } from "./types"

export function Input({ label, ...props }: IInputProps) {
  return (
    <div>
      <StyledInput.Label>{label}</StyledInput.Label>
      <StyledInput.Input {...props} />
    </div>
  )
}
