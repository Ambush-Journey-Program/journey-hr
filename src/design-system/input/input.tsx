import { useState } from "react"
import { Inputi, Label } from "./input.styled"
import { IInputProps } from "./types"

export function Input({ label, ...props }: IInputProps) {
  const getInputdata = () => {
    // const data = event.target.value
    // console.log(data)
  }
  // const [inputParams, setInputParams] = useState("")
  return (
    <>
      <div>
        <Label>{label}</Label>
        <Inputi {...props} />
      </div>
    </>
  )
}
