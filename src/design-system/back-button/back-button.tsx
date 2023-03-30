import { FC } from 'react'

import { Wrapper } from './back-button.styled'
import { IBackButtonProps } from './types'

export const BackButton: FC<IBackButtonProps> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>
}
