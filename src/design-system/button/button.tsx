import { ButtonStyle } from './button.styled';
import { type IButtonProps } from './types';

export function Button({
  sizeVariant = 'default',
  color = 'defaultColor',
  variant = 'defaultType',
  disabled,
  children,
  ...props
}: IButtonProps) {
  return (
    <ButtonStyle
      sizeVariant={sizeVariant}
      color={color}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
}
