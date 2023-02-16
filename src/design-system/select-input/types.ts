import { SelectHTMLAttributes } from 'react';

type Option = {
  label: string;
  value: string;
};

export type ISelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  title: string;
  options: Option[];
  error?: string;
  optional?: boolean;
};

export type StyledProps = {
  disabled?: boolean;
  optional?: boolean;
};

export type StyledSelectProps = StyledProps & {
  error?: string;
};
export type StyleWrapper = {
  error?: string;
};

export type StyledLegendProps = StyledProps;
