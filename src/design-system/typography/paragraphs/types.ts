export type ParagraphType =
  | 'giant'
  | 'extralarge'
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'extrasmall'
  | 'tiny';

export type TextWeight = 'hair' | 'light' | 'semibold';

export type ColorType =
  | 'red'
  | 'purple'
  | 'yellow'
  | 'dark'
  | 'light'
  | 'error';

export type ParagraphsProps = {
  children?: React.ReactNode | undefined;
  size: ParagraphType;
  fontWeight: TextWeight;
  colorVariant?: ColorType;
};
