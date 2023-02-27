export type ColorProp = 'defaultColor' | 'transparent';

export type CardProps = {
  children: JSX.Element | string;
  color?: ColorProp;
};
