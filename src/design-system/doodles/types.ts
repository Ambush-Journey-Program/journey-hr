import { ImgHTMLAttributes } from 'react';
import { DoodlesLib } from './svgLibrary';

export type ColorsProps = 'red' | 'purple' | 'yellow' | 'light' | 'dark';

export type IDoodlesProps = {
  icon: keyof typeof DoodlesLib;
  colors: ColorsProps;
} & ImgHTMLAttributes<HTMLImageElement>;

// Document here
// The code bellow converts the props icon of IDoodlesProps from required to Optional.
// This way,icon won't need to be declared in the <Style.Wrapper>, since the icon there is being treated as a child.
//icon just need to be required when calling the component Doodles.
// The code belows creates another type "DoodlesStylesProps" that has all the configuration of IDoodleProps, except that now, the only required prop is "colors"

type WithOptionalProperty<
  Type,
  TypeRequired extends keyof Type,
> = Partial<Type> & Required<Pick<Type, TypeRequired>>;
type RequiredProps = 'colors';
export type DoodlesStyleProps = WithOptionalProperty<
  IDoodlesProps,
  RequiredProps
>;
