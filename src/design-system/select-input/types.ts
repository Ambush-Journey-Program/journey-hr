import { type SelectHTMLAttributes } from 'react';

interface Option {
  label: string;
  value: string;
}

export type ISelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  title?: string;
  options: Option[];
  error?: string;
  handleSelect: (selectedValue: string) => void;
  placeholder?: string;
};

export interface StyledProps {
  disabled?: boolean;
}

export type StyledSelectProps = StyledProps & {
  error?: string;
  touched?: boolean;
};
