import { AsideMenu } from '@/components/aside-menu';
import * as Styled from './page.styled';
import { PageProps } from './types';
import { CardWrapper } from '@/design-system';

export function Page({ children }: PageProps) {
  return (
    <Styled.pageContainer>
      <Styled.menuWrapper background="default">
        <AsideMenu></AsideMenu>
      </Styled.menuWrapper>
      <Styled.contentBox>
        <CardWrapper>{children}</CardWrapper>
      </Styled.contentBox>
    </Styled.pageContainer>
  );
}
