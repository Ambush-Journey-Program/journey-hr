import { SizeProp } from '../button/types';
import { TextWeight, ParagraphType } from '../typography/paragraphs/types';
import * as HeroIcons from '@heroicons/react/24/solid';

export type SegmentedControlProps = {
  label: string;
  labelSize?: Extract<ParagraphType, 'default' | 'small'>;
  fontWeight?: Extract<TextWeight, 'light' | 'semibold'>;
  icon?: keyof typeof HeroIcons;
};
