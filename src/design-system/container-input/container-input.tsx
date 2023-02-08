import { FC } from "react"
import { Input } from "../input"

import { ContainerInputSkeleton } from "./container-input.skeleton"
import { Wrapper } from "./container-input.styled"
import { IContainerInputProps } from "./types"
import { IInputProps } from "../input/types"
export const ContainerInput: FC<IContainerInputProps> = ({
  isLoading,
  // label,
}) => {
  if (isLoading) {
    return <ContainerInputSkeleton />
  }

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
        disabled
      />
    </Wrapper>
  )
}
