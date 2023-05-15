import * as Styled from './paragraph.styled';

import { ParagraphProps } from './types';

export function Paragraph({
  size = 'default',
  fontWeight = 'light',
  colorVariant = 'dark',
  children,
}: ParagraphProps) {
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
