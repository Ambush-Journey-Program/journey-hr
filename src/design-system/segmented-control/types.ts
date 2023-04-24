import { TextWeight, ParagraphType } from '../typography/paragraphs/types';

export type SegmentedControlProps = {
  label: string;
  labelSize?: Extract<ParagraphType, 'medium' | 'default'>;
  labelFontWeight?: Extract<TextWeight, 'light' | 'semibold'>;
  onClick: () => void;
};
