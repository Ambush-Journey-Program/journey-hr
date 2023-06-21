import { StaticImageData } from 'next/image';
import { ImgHTMLAttributes } from 'react';

export type AvatarProps = {
  src: string | StaticImageData;
  sizeVariant: 'large' | 'small';
} & ImgHTMLAttributes<HTMLImageElement>;
