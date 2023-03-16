import { SelectHTMLAttributes } from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';

type Option = {
  label: string;
  value: string;
};

export type ISelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  title?: string;
  options: Option[];
  error?: string;
  handleSelect(selectedValue: string): void;
  placeholder?: string;
};

export type StyledProps = {
  disabled?: boolean;
};

export type StyledSelectProps = StyledProps & {
  error?: string;
};
