import { SelectHTMLAttributes } from 'react';

type Option = {
  label: string;
  value: string;
};

export type ISelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  title?: string;
  options: Option[];
  error?: string;
  warn?: string;
  handleSelect: (selectedValue: string) => void;
  placeholder?: string;
};

export type StyledProps = {
  disabled?: boolean;
};

export type StyledSelectProps = StyledProps & {
  error?: string;
  warn?: string;
  touched?: boolean;
};
