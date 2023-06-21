/* eslint-disable @typescript-eslint/indent */
import { ImgHTMLAttributes } from 'react';
import { DoodlesLib } from './svgLibrary';

export type ColorsProps = 'red' | 'purple' | 'yellow' | 'light' | 'dark';

export type IDoodlesProps = {
  icon: keyof typeof DoodlesLib;
  colors: ColorsProps;
} & ImgHTMLAttributes<HTMLImageElement>;

type WithOptionalProperty<
  Type,
  TypeRequired extends keyof Type,
> = Partial<Type> & Required<Pick<Type, TypeRequired>>;

type RequiredProps = 'colors';

export type DoodlesStyleProps = WithOptionalProperty<
  IDoodlesProps,
  RequiredProps
>;
