import { ImgHTMLAttributes } from 'react';

export type AvatarProps = {
  src: string;
  sizeVariant?: 'large' | 'small';
} & ImgHTMLAttributes<HTMLImageElement>;
