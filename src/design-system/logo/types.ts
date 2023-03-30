import { ImgHTMLAttributes } from 'react';
import { WithOptionalProperty } from '../../types';

import { Logos } from './logosrc';

export type ColorType = 'red' | 'purple' | 'yellow' | 'dark' | 'light';

export type ILogoProps = {
  variant: keyof typeof Logos;
  colorVariant: ColorType;
} & ImgHTMLAttributes<HTMLImageElement>;

type RequiredProps = 'colorVariant';
export type LogoProps = WithOptionalProperty<ILogoProps, RequiredProps>;