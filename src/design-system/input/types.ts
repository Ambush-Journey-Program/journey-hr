import { InputHTMLAttributes } from 'react';
import * as HeroIconOutline from '@heroicons/react/24/outline';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label?: string;
  error?: string | boolean;
  warn?: string;
  onTextChange: (value: string) => void;
  placeholder?: string;
  right?: boolean;
  iconLeft?: keyof typeof HeroIconOutline | null;
  iconRight?: keyof typeof HeroIconOutline;
  hasIconRight?: boolean;
};

export type StyleWrapper = {
  error?: boolean;
  warn?: string;
  right?: boolean;
};

export type StyledInputProps = {
  disabled?: boolean;
  error?: boolean;
  touched?: boolean;
  warn?: string;
  right?: string;
};

export type Colors = 'mediumContrast' | 'accepted' | 'error' | null;
