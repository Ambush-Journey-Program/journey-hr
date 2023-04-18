export type ParagraphType =
  | 'giant'
  | 'extralarge'
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'extrasmall'
  | 'tiny';

type TextWeight = 'hair' | 'semihair' | 'light' | 'semibold';

export type ColorType = 'red' | 'purple' | 'yellow' | 'dark' | 'light';

export interface ParagraphsProps {
  children: string;
  size: ParagraphType;
  fontWeight: TextWeight;
  colorVariant?: ColorType;
}
