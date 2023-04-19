import { InputHTMLAttributes } from 'react';

export type IInterviewAvailabilityProps =
  InputHTMLAttributes<HTMLInputElement> & {
    onChange?: (value: string) => void;
  };
