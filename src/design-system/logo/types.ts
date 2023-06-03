import { ImgHTMLAttributes } from 'react';
import { Logos } from './logosrc';

export type ColorsProps = 'red' | 'purple' | 'yellow' | 'dark' | 'light';

export type ILogoProps = {
  logoVariation: keyof typeof Logos;
<<<<<<< HEAD
  colorVariant: ColorsProps;
=======
  colors: ColorsProps;
>>>>>>> 9a50f8d (Refactor: fixed Doodles and Logo)
} & ImgHTMLAttributes<HTMLImageElement>;

type WithOptionalProperty<
  Type,
  TypeRequired extends keyof Type,
> = Partial<Type> & Required<Pick<Type, TypeRequired>>;

<<<<<<< HEAD
type RequiredProps = 'colorVariant';

export type LogoStyleProps = WithOptionalProperty<ILogoProps, RequiredProps>;
=======
type RequiredProps = 'colors';

export type LogoStyleProps = WithOptionalProperty<
  ILogoProps,
  RequiredProps
>;
>>>>>>> 9a50f8d (Refactor: fixed Doodles and Logo)
