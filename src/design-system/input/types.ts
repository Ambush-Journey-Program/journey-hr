import { type InputHTMLAttributes } from 'react';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  onTextChange?: (value: string) => void;
  optional?: boolean;
  type?: string;
};

export interface StyleWrapper {
  error?: string;
}

export interface StyledLabelProps {
  disabled?: boolean;
  optional?: boolean;
}

export interface StyledInputProps {
  disabled?: boolean;
  optional?: boolean;
  error?: string;
  touched?: boolean;
}
