export type ParagraphType =
  | 'giant'
  | 'extralarge'
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'extrasmall'
  | 'tiny';

export type WheightType = 'hair' | 'light' | 'semibold';

export type ParagraphsProps = {
  children: string;
  size: ParagraphType;
  fontWeight: WheightType;
};
