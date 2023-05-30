import { InputHTMLAttributes } from 'react';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  warn?: string;
  onTextChange?: (value: string) => void;
  placeholder?: string;
  right?: boolean;
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
