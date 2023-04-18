export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps {
  children: string;
  variant: TitleType;
}
