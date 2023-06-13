import { CardWrapper } from '@ambush/ui';
import { AsideMenu } from '@ambush/components';
import * as Styled from './layout.styled';
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
