import { ImgHTMLAttributes } from 'react';
import { theme } from '../../styles/theme';
export interface IDoodlesProps {
  label: string;
}

export type DoodlesProps = {
  src: {};
  colors: Colors;
  fill: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export type Colors = 'red' | 'blue' | 'yellow';
