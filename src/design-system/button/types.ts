import  { ButtonHTMLAttributes } from "react";

export type IButtonProps = {
  sizeVariant?: "default";
} & ButtonHTMLAttributes<HTMLButtonElement>;
