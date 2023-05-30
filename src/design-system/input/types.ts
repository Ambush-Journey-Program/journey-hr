import { InputHTMLAttributes } from 'react';
import * as HeroIconOutline from '@heroicons/react/24/outline';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  warn?: string;
  onTextChange?: (value: string) => void;
  placeholder?: string;
  right?: boolean;
  iconLeft?: keyof typeof HeroIconOutline;
  iconRight?: keyof typeof HeroIconOutline;
  hasIconRight?: boolean;
};

export type StyleWrapper = {
  error?: boolean;
  warn?: string;
  right?: boolean;
};

export type StyledLabelProps = { disabled?: boolean };

export type StyledInputProps = {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  warn?: string;
  right?: string;
};
