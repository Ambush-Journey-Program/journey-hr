import styled, { css } from "styled-components"
import { IInputProps, IInputStyleProps } from "./types"

export const Label = styled.label`
  color: red;
`

export const Inputi = styled.input<IInputStyleProps>`
  padding: 0.5em;
  margin: 0.5em;
  color: red;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  ${(props) =>
    props.variant === "old" &&
    css`
      background: red;
      boder: 1px solid black;
    `}
`
