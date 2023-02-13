import styled from "styled-components"
import { IContainerInputProps } from "./types"

export const Wrapper = styled.div<IContainerInputProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 73px 92px;
  gap: 4px;
  background: #ffffff;
`
