export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type SubtitleType = 's1' | 's2' | 's3' | 's4' | 's5' | 's6';

export type ParagraphType =
  | 'giant'
  | 'extralarge'
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'extrasmall'
  | 'tiny';

export type WheightType = 'hair' | 'light' | 'demibold';

export type TitleProps = {
  children: string;
  titleVariant: TitleType;
};

export type SubtitleProps = {
  children: string;
  subtitleVariant: SubtitleType;
};

export type ParagraphsProps = {
  children: string;
  sizeVariant: ParagraphType;
  fontWeight: WheightType;
};
