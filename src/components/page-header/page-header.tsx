import { Title, Subtitle } from '@ambush/ui';
import { PageHeaderProps } from './types';
import * as Styled from './page-header.styled';

export function PageHeader({
  title,
  subtitle,
  backButton,
  button,
}: PageHeaderProps) {
  return (
    <Styled.Container data-testid="page-header">
      <Styled.BackButtonBox>{backButton}</Styled.BackButtonBox>
      <Title variant="h1">{title}</Title>
      <Styled.Wrapper>
        <Subtitle fontWeight="regular" variant="s4">
          {subtitle}
        </Subtitle>
      </Styled.Wrapper>
      <Styled.ButtonBox>{button}</Styled.ButtonBox>
    </Styled.Container>
  );
}
