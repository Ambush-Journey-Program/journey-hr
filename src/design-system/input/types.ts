import { InputHTMLAttributes } from 'react';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  onTextChange?: (value: string) => void;
  optional?: boolean;
  placeholder?: string;
  type?: string;
};

type NewType = {
  disabled?: boolean;
  optional?: boolean;
};
type StyledProps = NewType;
export type StyleWrapper = {
  error?: string;
};

export type StyledLabelProps = StyledProps;

export type StyledInputProps = StyledProps & {
  error?: string;
  touched?: boolean;
};
