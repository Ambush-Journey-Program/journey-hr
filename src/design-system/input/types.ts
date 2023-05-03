import { InputHTMLAttributes } from 'react';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | JSX.Element;
  warn?: string;
  onTextChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  variant?: boolean;
};

export type StyleWrapper = {
  error?: string | JSX.Element;
  warn?: string;
};

export type StyledLabelProps = { disabled?: boolean };

export type StyledInputProps = {
  disabled?: boolean;
  error?: string | JSX.Element;
  touched?: boolean;
  warn?: string;
  variant?: boolean;
};
