import { ButtonStyle } from './button.styled';
import type { IButtonProps } from './types';
import { PlusIcon } from '@heroicons/react/24/solid';

export function Button({
  sizeVariant = 'default',
  color = 'defaultColor',
  variant = 'defaultType',
  disabled,
  children,
  icon,
  ...props
}: IButtonProps) {
  const buttonIcon = icon ? <PlusIcon /> : undefined;

  return (
    <>
      <ButtonStyle
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
