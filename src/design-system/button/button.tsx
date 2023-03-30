import { ButtonStyle } from "./button.styled";
import type { IButtonProps } from "./types";
import * as Icons from "@heroicons/react/24/solid";

export function Button({
  sizeVariant = "default",
  color = "defaultColor",
  variant = "defaultType",
  disabled,
  children,
  icon,
  ...props
}: IButtonProps) {
  // @ts-ignore /

  const TheIcon = Icons[icon];
  const buttonIcon = icon && <TheIcon data-testid="button-icon" />;

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
