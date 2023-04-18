import { type ButtonHTMLAttributes } from 'react';
import type * as HeroIcons from '@heroicons/react/24/solid';

export type SizeProp = 'medium' | 'large' | 'small';

export type ColorProp = 'primary' | 'secondary' | 'alternative';

export type ButtonType = 'default' | 'outlined' | 'ghost';

type BaseButtonProps = {
  color?: ColorProp;
  sizeVariant?: SizeProp;
  variant?: ButtonType;
  icon?: keyof typeof HeroIcons;
} & ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonSubmit {
  type?: 'submit' | 'reset';
  onClick?: () => void;
}

interface DefaultButton {
  type: Exclude<'button', 'submit' | 'reset'>;
  onClick: () => void;
}

type ButtonPropsVariable = ButtonSubmit | DefaultButton;

export type ButtonProps = BaseButtonProps & ButtonPropsVariable;
