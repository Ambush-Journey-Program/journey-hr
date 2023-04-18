export type ColorProp = 'default' | 'transparent';

export interface CardProps {
  children: JSX.Element | string | JSX.Element[];
  background?: ColorProp;
}
