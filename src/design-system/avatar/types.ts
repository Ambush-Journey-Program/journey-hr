import { ImgHTMLAttributes } from 'react';

export type AvatarProps = {
  src: string;
  sizeVariant?: string;
} & ImgHTMLAttributes<HTMLImageElement>;
