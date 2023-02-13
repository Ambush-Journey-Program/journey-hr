import { useState } from "react"
import * as Styled from "./input.styled"
import { IInputProps } from "./types"

export function Input({
  label,
  required,
  value,
  onTextChange = () => {},
  ...props
}: IInputProps) {
  const { name, error } = props

  return (
    <div>
      <Styled.Wrapper error={error}>
        <Styled.Label htmlFor={name}>{label}</Styled.Label>
        <Styled.InputContainer>
          <input
            placeholder="Label"
            type="text"
            value={value}
            onChange={(e) => onTextChange(e.target.value)}
          />
        </Styled.InputContainer>
        {!!error && <span>{error}</span>}
      </Styled.Wrapper>
    </div>
  )
}
