import { ButtonStyle } from './button.styled';
import type { ButtonProps } from './types';
import * as Icons from '@heroicons/react/24/solid';

export function Button({
  type = 'button',
  onClick,
  sizeVariant = 'medium',
  color = 'primary',
  variant = 'default',
  disabled,
  children,
  icon,
  ...props
}: ButtonProps) {
  // @ts-expect-error /
  const TheIcon = Icons[icon];
  const buttonIcon = icon && <TheIcon data-testid="button-icon" />;
  return (
    <>
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
    </>
  );
}
