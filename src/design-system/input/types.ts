import { InputHTMLAttributes } from "react"

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  readOnly?: boolean
}
