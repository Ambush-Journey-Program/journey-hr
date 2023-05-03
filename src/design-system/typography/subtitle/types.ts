type SubtitleType = 's1' | 's2' | 's3' | 's4' | 's5' | 's6';

type TextWeight = 'hair' | 'regular' | 'medium';

export type SubtitleProps = {
  children: string;
  variant: SubtitleType;
  fontWeight: TextWeight;
};
