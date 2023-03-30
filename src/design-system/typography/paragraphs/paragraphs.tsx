import * as Styled from './paragraphs.styled';

import { ParagraphsProps } from './types';

export function Paragraphs({
  size = 'default',
  fontWeight = 'light',
  colorVariant = 'dark',
  children,
}: ParagraphsProps) {
  return (
    <Styled.Paragraph
      size={size}
      fontWeight={fontWeight}
      colorVariant={colorVariant}
    >
      {children}
    </Styled.Paragraph>
  );
}
