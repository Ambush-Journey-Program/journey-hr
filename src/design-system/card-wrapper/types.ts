export type ColorProp = 'default' | 'transparent';

export type CardProps = {
  children: JSX.Element | string;
  background?: ColorProp;
};