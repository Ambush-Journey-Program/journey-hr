import { ButtonHTMLAttributes } from "react";

export type SizeProp = "default" | "large" | "small";

export type ColorProp = "default" | "blue" | "purple";

export type ButtonType = "default" | "outlined" | "ghost";

export type IButtonProps = {
  colorVariant?: ColorProp;
  sizeVariant?: SizeProp;
  buttonVariant?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;
