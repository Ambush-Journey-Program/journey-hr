import { FC, PropsWithChildren } from 'react'
import { ButtonStyle } from './button.styled'
import { IButtonProps } from './types'

export const Button: FC<PropsWithChildren <IButtonProps>> = ({ sizeVariant="default", disabled, children, ...props }) => {
  return <ButtonStyle sizeVariant={sizeVariant} disabled={disabled} {...props}>{children}</ButtonStyle>
}
