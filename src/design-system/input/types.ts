import { InputHTMLAttributes, ChangeEvent, MutableRefObject } from 'react';

export type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  onTextChange?: (value: string) => void;
  optional?: boolean;
  placeholder?: string;
  ref?: React.HTMLProps<HTMLInputElement>;
};

type StyledProps = {
  disabled?: boolean;
  optional?: boolean;
};

export type StyleWrapper = {
  error?: string;
};

export type StyledLabelProps = StyledProps;

export type StyledInputProps = StyledProps & {
  error?: string;
};
