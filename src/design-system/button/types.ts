import { ButtonHTMLAttributes } from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';

export type SizeProp = 'medium' | 'large' | 'small';

export type ColorProp = 'primary' | 'secondary' | 'alternative';

export type ButtonType = 'default' | 'outlined' | 'ghost';

export type IButtonProps = {
  color?: ColorProp;
  sizeVariant?: SizeProp;
  variant?: ButtonType;
  icon?: keyof typeof HeroIcons;
} & ButtonHTMLAttributes<HTMLButtonElement>;
