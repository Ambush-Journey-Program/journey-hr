import { ImgHTMLAttributes } from 'react';

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

export type AvatarProps = WithRequiredProperty<
  ImgHTMLAttributes<HTMLImageElement>,
  'src'
>;
