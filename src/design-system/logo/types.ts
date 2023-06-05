import { ImgHTMLAttributes } from 'react';
import { Logos } from './logosrc';

export type ColorsProps = 'red' | 'purple' | 'yellow' | 'dark' | 'light';

export type ILogoProps = {
  logoVariation: keyof typeof Logos;
  colorVariant: ColorsProps;
} & ImgHTMLAttributes<HTMLImageElement>;

type WithOptionalProperty<
  Type,
  TypeRequired extends keyof Type,
> = Partial<Type> & Required<Pick<Type, TypeRequired>>;

type RequiredProps = 'colorVariant';

export type LogoStyleProps = WithOptionalProperty<ILogoProps, RequiredProps>;
