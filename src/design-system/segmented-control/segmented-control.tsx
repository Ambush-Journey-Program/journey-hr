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
  const TheIcon = Icons[icon];
  const LinkIcon = icon && <TheIcon data-testid="button-icon" />;

  console.log(TheIcon);
  return (
    <Styled.Container>
      <Styled.LinkLabel href="#/">
        <Paragraphs size={labelSize} fontWeight={fontWeight}>
          {LinkIcon}
          {label}
          {/* {`${[buttonIcon]}` + `${label}`} */}
        </Paragraphs>
      </Styled.LinkLabel>
    </Styled.Container>
  );
}
