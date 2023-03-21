import * as Styled from './typografy.styled';

import { TitleProps, SubtitleProps, ParagraphsProps } from './types';

export function Title({ variant, children }: TitleProps) {
  return (
    <Styled.Title variant={variant} as={variant}>
      {children}
    </Styled.Title>
  );
}

export function Subtitle({ variant, children }: SubtitleProps) {
  return <Styled.Subtitle variant={variant}>{children}</Styled.Subtitle>;
}

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
