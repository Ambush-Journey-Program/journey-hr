import { FC, useState } from "react"
import { Input } from "../input"
import { ContainerInputSkeleton } from "./container-input.skeleton"
import { Wrapper } from "./container-input.styled"
import { IContainerInputProps } from "./types"

export const ContainerInput: FC<IContainerInputProps> = ({ isLoading }) => {
  if (isLoading) {
    return <ContainerInputSkeleton />
  }
  const [isDisabled, setIsDisabled] = useState(true)
  return (
    <Wrapper>
      <Input
        label="Title"
        placeholder="Label"
        type="text"
        onChange={() => console.log("AQUI")}
      />
      <Input
        variant="old"
        label="Title"
        placeholder="Label"
        type="text"
        onChange={() => console.log("AQUI")}
        disabled={isDisabled}
      />
    </Wrapper>
  )
}
