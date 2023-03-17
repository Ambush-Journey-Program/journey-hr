import {
  TitleStyled,
  SubtitleStyled,
  ParagraphStyled,
} from './typografy.styled';

import { TitleProps, SubtitleProps, ParagraphsProps } from './types';

export function Title({ titleVariant, children }: TitleProps) {
  return <TitleStyled titleVariant={titleVariant}>{children}</TitleStyled>;
}

export function Subtitle({ subtitleVariant, children }: SubtitleProps) {
  return (
    <SubtitleStyled subtitleVariant={subtitleVariant}>
      {children}
    </SubtitleStyled>
  );
}

export function Paragraphs({
  sizeVariant,
  fontWeight,
  children,
}: ParagraphsProps) {
  return (
    <ParagraphStyled sizeVariant={sizeVariant} fontWeight={fontWeight}>
      {children}
    </ParagraphStyled>
  );
}
