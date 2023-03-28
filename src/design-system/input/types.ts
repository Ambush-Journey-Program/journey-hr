import { InputHTMLAttributes } from 'react';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  onTextChange?: (value: string) => void;
  optional?: boolean;
  type?: string;
};

export type StyleWrapper = {
  error?: string;
};

export type StyledLabelProps = { disabled?: boolean; optional?: boolean };

export type StyledInputProps = {
  disabled?: boolean;
  optional?: boolean;
  error?: string;
  touched?: boolean;
};
