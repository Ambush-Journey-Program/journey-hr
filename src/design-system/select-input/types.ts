import { SelectHTMLAttributes } from "react"

type Option = {
  label: string;
  value: string | text;
}

export type ISelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder?: string;
  title:string;
  options: Option[];
};

