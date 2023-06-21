import { Title, Subtitle } from '@ambush/ui';
import { PageHeaderProps } from './types';
import * as Styled from './page-header.styled';

export function PageHeader ({
  title,
  subtitle,
  backButton,
  button,
}: PageHeaderProps) {
  return (
    <Styled.Container data-testid="header">
      <Styled.BackButtonBox>{backButton}</Styled.BackButtonBox>
      <Title variant="h4">{title}</Title>
      <Styled.Wrapper>
        <Subtitle fontWeight="regular" variant="s5">
          {subtitle}
        </Subtitle>
      </Styled.Wrapper>
      <Styled.ButtonBox>{button}</Styled.ButtonBox>
    </Styled.Container>
  );
}
