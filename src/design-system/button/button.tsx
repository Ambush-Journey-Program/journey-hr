import { ButtonStyle } from "./button.styled";
import { IButtonProps } from "./types";

export default function Button({
  sizeVariant = "default",
  colorVariant = "default",
  disabled,
  children,
  ...props
}: IButtonProps) {
  return (
    <ButtonStyle
      sizeVariant={sizeVariant}
      colorVariant={colorVariant}
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
}
