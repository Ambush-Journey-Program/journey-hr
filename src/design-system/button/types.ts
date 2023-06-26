import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';

export type SizeProp = 'medium' | 'large' | 'small';

export type ColorProp = 'primary' | 'secondary' | 'alternative';

export type ButtonType = 'default' | 'outlined' | 'ghost';

type BaseButtonProps = {
  color?: ColorProp;
  sizeVariant?: SizeProp;
  variant?: ButtonType;
  icon?: keyof typeof HeroIcons;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSubmit = {
  type?: 'submit' | 'reset';
  onClick?: () => void;
};

type DefaultButton = {
  type: Exclude<'button', 'submit' | 'reset'>;
  onClick: () => void;
};

type ButtonWithoutChildren = {
  children?: undefined;
  'aria-label': string;
};

type ButtonWithChildren = {
  children: ReactNode;
  'aria-label'?: string;
};

type ButtonChildrenVariable = ButtonWithChildren | ButtonWithoutChildren;

type ButtonPropsVariable = ButtonSubmit | DefaultButton;

export type ButtonProps = BaseButtonProps &
  ButtonPropsVariable &
  ButtonChildrenVariable;
