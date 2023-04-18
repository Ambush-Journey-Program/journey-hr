export type ParagraphType =
  | 'giant'
  | 'extralarge'
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'extrasmall'
  | 'tiny';

type TextWeight = 'hair' | 'light' | 'semibold';

export type ColorType = 'red' | 'purple' | 'yellow' | 'dark' | 'light';

export type ParagraphsProps = {
  children: string;
  size: ParagraphType;
  fontWeight: TextWeight;
  colorVariant?: ColorType;
};
