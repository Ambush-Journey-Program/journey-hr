import { type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

export type TextAreaProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: boolean;
  onTextChange?: (value: string) => void;
  spellCheck?: boolean;
  touched?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface StyledProps {
  error?: boolean;
  internalTouched?: boolean;
}
