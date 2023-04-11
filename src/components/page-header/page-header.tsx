import { Title, Subtitle } from '@ambush/ui';
import { PageHeaderProps } from './types';
import * as Styled from './page-header.styled';

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Styled.Wrapper data-testid="page-header">
      <Title variant={'h1'}>{title}</Title>
      <Styled.Wrapper>
        <Subtitle variant="s4">{subtitle}</Subtitle>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
}
