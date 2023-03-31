import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type TextAreaProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  onTextChange?: (value: string) => void;
  spellCheck: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type StyleWrapper = {
  error?: boolean;
};

export type StyledProps = {
  error?: boolean;
  touched?: boolean;
};
