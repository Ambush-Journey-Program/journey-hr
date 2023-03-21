import * as Styled from './subtitle.styled';

import { SubtitleProps } from './types';

export function Subtitle({ variant, children }: SubtitleProps) {
  return <Styled.Subtitle variant={variant}>{children}</Styled.Subtitle>;
}
