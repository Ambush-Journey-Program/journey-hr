import { ButtonHTMLAttributes } from "react";

type ButtonSizeProp = "default" | "large" | "small";

export type IButtonProps = {
  sizeVariant?: ButtonSizeProp;
} & ButtonHTMLAttributes<HTMLButtonElement>;
