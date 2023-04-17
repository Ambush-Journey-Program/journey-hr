import { ButtonHTMLAttributes } from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';

export type SizeProp = 'medium' | 'large' | 'small';

export type ColorProp = 'primary' | 'secondary' | 'alternative';

export type ButtonType = 'default' | 'outlined' | 'ghost';

export type IButtonProps =
  | ({
      onClick?: () => void;
      type?: 'submit';
      color?: ColorProp;
      sizeVariant?: SizeProp;
      variant?: ButtonType;
      icon?: keyof typeof HeroIcons;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      onClick: () => void;
      type: Exclude<'button' | 'reset', 'submit'>;
      color?: ColorProp;
      sizeVariant?: SizeProp;
      variant?: ButtonType;
      icon?: keyof typeof HeroIcons;
    } & ButtonHTMLAttributes<HTMLButtonElement>);
