import { InputHTMLAttributes, ChangeEvent } from "react"

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  onTextChange?: (value: string) => void
}
