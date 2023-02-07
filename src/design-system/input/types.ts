import { InputHTMLAttributes } from "react"

export interface IInputProps
  extends IInputStyleProps,
    InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export interface IInputStyleProps {
  variant?: string
}
