import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type TextAreaProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: boolean;
  onTextChange?: (value: string) => void;
  spellCheck?: boolean;
  touched?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type StyledProps = {
  error?: boolean;
  internalTouched?: boolean;
};
