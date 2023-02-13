import { InputHTMLAttributes } from "react"

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  optional?: boolean
}

type StyledProps = {
  disabled?: boolean
  optional?: boolean
}

export type StyledLabelProps = StyledProps

export type StyledInputProps = StyledProps
