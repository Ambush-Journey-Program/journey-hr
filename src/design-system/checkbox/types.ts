import { InputHTMLAttributes } from 'react';
import { TextWeight, ParagraphType } from '../typography/paragraphs/types';

export type CheckboxProps = {
  onChange: () => void;
  isChecked: boolean;
  label: string;
  description: string;
  disabled?: boolean;
  labelFontWeight?: Extract<TextWeight, 'light' | 'semibold'>;
} & InputHTMLAttributes<HTMLInputElement>;
