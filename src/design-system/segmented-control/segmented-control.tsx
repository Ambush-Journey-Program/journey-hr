import { Paragraphs } from '../typography';
import * as Styled from './segmented-control.styled';
import { SegmentedControlProps } from './types';

export function SegmentedControl({
  label,
  labelSize = 'default',
  labelFontWeight = 'light',
  onClick,
}: SegmentedControlProps) {
  return (
    <Styled.container>
      <Styled.labelBbox>
        <Paragraphs size={labelSize} fontWeight={labelFontWeight}>
          {label}
        </Paragraphs>
      </Styled.labelBbox>
    </Styled.container>
  );
}
