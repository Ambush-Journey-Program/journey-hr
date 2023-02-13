import { ButtonHTMLAttributes } from "react";

export type SizeProp = "default" | "large" | "small";

export type ColorProp = "default" | "blue" | "purple";

export type IButtonProps = {
  colorVariant?: ColorProp;
  sizeVariant?: SizeProp;
} & ButtonHTMLAttributes<HTMLButtonElement>;
