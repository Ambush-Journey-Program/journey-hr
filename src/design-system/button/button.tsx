import { ButtonStyle } from "./button.styled";
import { IButtonProps } from "./types";

export default function Button({
  sizeVariant = "default",
  colorVariant = "defaultColor",
  buttonVariant = "defaultType",
  disabled,
  children,
  ...props
}: IButtonProps) {
  return (
    <ButtonStyle
      sizeVariant={sizeVariant}
      colorVariant={colorVariant}
      buttonVariant={buttonVariant}
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
}
