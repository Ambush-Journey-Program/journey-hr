import { Paragraphs } from '../typography';
import * as Styled from './segmented-control.styled';
import { SegmentedControlProps } from './types';
import * as Icons from '@heroicons/react/24/solid';

export function SegmentedControl({
  label,
  fontWeight = 'light',
  labelSize = 'large',
  onClick,
  icon,
}: SegmentedControlProps) {
  const TheIcon = Icons[icon];
  const buttonIcon = icon && <TheIcon data-testid="button-icon" />;
  return (
    <Styled.Container>
      <Styled.ButtonLabel>
        <Paragraphs
          onClick={onClick}
          labelSize={labelSize}
          fontWeight={fontWeight}
        >
          {buttonIcon}
          {label}
        </Paragraphs>
      </Styled.ButtonLabel>
    </Styled.Container>
  );
}
