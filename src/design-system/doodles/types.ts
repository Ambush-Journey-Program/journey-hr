import { ImgHTMLAttributes } from 'react';
import { DoodlesLib } from './svgLibrary';

export type ColorsProps = 'red' | 'purple' | 'yellow' | 'light' | 'dark';

export type IDoodlesProps = {
  icon: keyof typeof DoodlesLib;
  colors: ColorsProps;
} & ImgHTMLAttributes<HTMLImageElement>;

export type DoodlesStyleProps = {
  icon?: keyof typeof DoodlesLib;
  colors: ColorsProps;
};
