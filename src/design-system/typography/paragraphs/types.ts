export type ParagraphType =
  | 'giant'
  | 'extralarge'
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'extrasmall'
  | 'tiny';

export type TextWeight = 'hair' | 'semihair' | 'light' | 'semibold';

export type ColorType = 'red' | 'purple' | 'yellow' | 'dark' | 'light';

export type ParagraphsProps = {
  children: string;
  size: ParagraphType;
  fontWeight: TextWeight;
  colorVariant?: ColorType;
};
