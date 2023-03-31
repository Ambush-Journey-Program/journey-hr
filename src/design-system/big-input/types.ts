import { InputHTMLAttributes } from 'react';

export type IBigInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  onTextChange?: (value: string) => void;
  rows: number;
  minLength: number;
  spellCheck: boolean;
};

export type StyleWrapper = {
  error?: boolean;
};

export type StyledInputProps = {
  error?: boolean;
  touched?: boolean;
};
