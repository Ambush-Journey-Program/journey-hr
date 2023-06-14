import * as Styled from './subtitle.styled';

import { SubtitleProps } from './types';

export function Subtitle ({
  variant,
  children,
  fontWeight = 'medium',
}: SubtitleProps) {
  return (
    <Styled.Subtitle variant={variant} fontWeight={fontWeight}>
      {children}
    </Styled.Subtitle>
  );
}
