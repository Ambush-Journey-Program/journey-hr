import { ButtonStyle } from './button.styled';
import type { ButtonProps } from './types';
import * as Icons from '@heroicons/react/24/outline';

export function Button({
  type = 'button',
  sizeVariant = 'medium',
  color = 'primary',
  variant = 'default',
  disabled,
  children,
  icon,
  ...props
}: ButtonProps) {
  const TheIcon = icon && Icons[icon];
  const buttonIcon = TheIcon && <TheIcon data-testid="button-icon" />;
  return (
    <ButtonStyle
      haveChildren={Boolean(children)}
      sizeVariant={sizeVariant}
      color={color}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {buttonIcon}
      {children}
    </ButtonStyle>
  );
}
