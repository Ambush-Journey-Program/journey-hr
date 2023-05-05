import {
  ParagraphType,
  TextWeight,
} from '@/design-system/typography/paragraphs/types';
import * as HeroIcons from '@heroicons/react/24/solid';

export type TabProps = {
  label: string;
  labelSize?: Extract<ParagraphType, 'default' | 'small'>;
  fontWeight?: Extract<TextWeight, 'light' | 'semibold'>;
  icon?: keyof typeof HeroIcons;
  href?: string;
};
