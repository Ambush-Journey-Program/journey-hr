import { ImgHTMLAttributes } from 'react';

import { Logos } from './logosrc';

export type ColorType = 'red' | 'purple' | 'yellow' | 'dark' | 'light';

export type ILogoProps = {
  variant: keyof typeof Logos;
  colorVariant: ColorType;
} & ImgHTMLAttributes<HTMLImageElement>;

type WithOptionalProperty<
  Type,
  TypeRequired extends keyof Type,
> = Partial<Type> & Required<Pick<Type, TypeRequired>>;
type RequiredProps = 'colorVariant';
export type LogoProps = WithOptionalProperty<ILogoProps, RequiredProps>;
