import * as Styled from './paragraphs.styled';

import { ParagraphsProps } from './types';

export function Paragraphs({
  size = 'default',
  fontWeight = 'light',
  children,
}: ParagraphsProps) {
  return (
    <Styled.Paragraph size={size} fontWeight={fontWeight}>
      {children}
    </Styled.Paragraph>
  );
}
