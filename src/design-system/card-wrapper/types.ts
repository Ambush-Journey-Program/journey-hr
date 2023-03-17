export type ColorProp = 'default' | 'transparent';

export type CardProps = {
  children: JSX.Element | string | JSX.Element[];
  background?: ColorProp;
};
