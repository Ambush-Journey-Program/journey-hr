import * as Styled from './typografy.styled';

import { TitleProps, SubtitleProps, ParagraphsProps } from './types';

export function Title({ titleVariant, children }: TitleProps) {
  return <Styled.Title titleVariant={titleVariant}>{children}</Styled.Title>;
}

export function Subtitle({ subtitleVariant, children }: SubtitleProps) {
  return (
    <Styled.Subtitle subtitleVariant={subtitleVariant}>
      {children}
    </Styled.Subtitle>
  );
}

export function Paragraphs({
  sizeVariant = 'default',
  fontWeight = 'light',
  children,
}: ParagraphsProps) {
  return (
    <Styled.Paragraph sizeVariant={sizeVariant} fontWeight={fontWeight}>
      {children}
    </Styled.Paragraph>
  );
}
