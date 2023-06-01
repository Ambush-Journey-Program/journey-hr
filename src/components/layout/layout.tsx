import { AsideMenu } from '@ambush/ui';
import * as Styled from './layout.styled';
import { CardWrapper } from '@ambush/ui';
import { LayoutProps } from './types';

export function Layout({ children }: LayoutProps) {
  return (
    <Styled.pageContainer>
      <Styled.menuWrapper background="default">
        <AsideMenu/>
      </Styled.menuWrapper>
      <Styled.contentBox>
        <CardWrapper>{children}</CardWrapper>
      </Styled.contentBox>
    </Styled.pageContainer>
  );
}
