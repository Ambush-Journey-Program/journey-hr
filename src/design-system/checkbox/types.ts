import { type InputHTMLAttributes } from 'react';

export type CheckboxProps = {
  onChange: () => void;
  isChecked: boolean;
  label: string;
  description: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
