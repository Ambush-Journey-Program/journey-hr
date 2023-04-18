import { Title, Paragraphs } from '@ambush/ui';
import { type PageHeaderProps } from './types';
import * as Styled from './page-header.styled';

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Styled.Wrapper data-testid="page-header">
      <Styled.StyledBackButton onClick={() => {}} />
      <Title variant={'h5'}>{title}</Title>
      <Styled.Wrapper>
        <Paragraphs size="large" fontWeight="hair" colorVariant="dark">
          {subtitle}
        </Paragraphs>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
}
