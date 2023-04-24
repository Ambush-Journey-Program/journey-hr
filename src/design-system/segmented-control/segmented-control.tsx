import { Paragraphs } from '../typography';
import * as Styled from './segmented-control.styled';
import { SegmentedControlProps } from './types';
import * as Icons from '@heroicons/react/24/solid';

export function SegmentedControl({
  label,
  fontWeight = 'light',
  labelSize = 'default',
  icon,
}: SegmentedControlProps) {
  const TheIcon = icon && Icons[icon];
  const LinkIcon = TheIcon && <TheIcon data-testid="button-icon" />;
  return (
    <Styled.LinkLabel href="#">
      <Paragraphs size={labelSize} fontWeight={fontWeight}>
        {LinkIcon}
        {label}
      </Paragraphs>
    </Styled.LinkLabel>
  );
}
