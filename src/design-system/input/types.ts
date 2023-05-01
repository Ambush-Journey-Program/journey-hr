import { InputHTMLAttributes } from 'react';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  onTextChange?: (value: string) => void;
  type?: string;
};

export type StyleWrapper = {
  error?: string;
};

export type StyledLabelProps = { disabled?: boolean };

export type StyledInputProps = {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
};
