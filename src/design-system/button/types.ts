import { ButtonHTMLAttributes } from "react";

export type SizeProp = "default" | "large" | "small";

export type ColorProp = "defaultColor" | "blue" | "purple";

export type ButtonType = "defaultType" | "outlined" | "ghost";

export type IButtonProps = {
  colorVariant?: ColorProp;
  sizeVariant?: SizeProp;
  buttonVariant?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;
