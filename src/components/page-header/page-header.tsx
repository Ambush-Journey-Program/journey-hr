import { Title, Paragraphs } from '@ambush/ui';
import { PageHeaderProps } from './types';
import * as Styled from './page-header.styled';

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <Title variant={'h5'}>{title}</Title>
      <Styled.Wrapper>
        <Paragraphs size="large" fontWeight="hair" colorVariant="dark">
          {subtitle}
        </Paragraphs>
      </Styled.Wrapper>
    </>
  );
}
