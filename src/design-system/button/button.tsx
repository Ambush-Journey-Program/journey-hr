import { ButtonStyle } from './button.styled';
import type { IButtonProps } from './types';
import * as Icons from '@heroicons/react/24/solid';

export function Button({
  sizeVariant = 'medium',
  color = 'primary',
  variant = 'default',
  disabled,
  children,
  icon,
  ...props
}: IButtonProps) {
  // @ts-ignore /

  const TheIcon = Icons[icon];
  const buttonIcon = icon && <TheIcon data-testid="button-icon" />;
  console.log({ children });
  return (
    <>
      <ButtonStyle
        haveChildren={!Boolean(children)}
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
