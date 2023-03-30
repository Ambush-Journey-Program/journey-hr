import { ButtonHTMLAttributes } from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';

export type SizeProp = 'default' | 'large' | 'small';

export type ColorProp = 'defaultColor' | 'blue' | 'purple';

export type ButtonType = 'defaultType' | 'outlined' | 'ghost';

export type IButtonProps = {
  color?: ColorProp;
  sizeVariant?: SizeProp;
  variant?: ButtonType;
  icon?: keyof typeof HeroIcons;
} & ButtonHTMLAttributes<HTMLButtonElement>;
