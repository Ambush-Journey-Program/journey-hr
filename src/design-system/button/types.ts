import { ButtonHTMLAttributes } from "react";

export type ButtonSizeProp = "default" | "large" | "small";

export type IButtonProps = {
  sizeVariant?: ButtonSizeProp;
} & ButtonHTMLAttributes<HTMLButtonElement>;
