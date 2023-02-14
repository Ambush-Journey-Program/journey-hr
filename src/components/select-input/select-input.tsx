import { FC } from 'react'

import { Wrapper } from './select-input.styled'
import { ISelectInputProps } from './types'

export const SelectInput: FC<ISelectInputProps> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>
}
