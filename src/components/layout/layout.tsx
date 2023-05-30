import { AsideMenu } from '@/components/aside-menu';
import * as Styled from './layout.styled';
import { CardWrapper } from '@/design-system';
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
