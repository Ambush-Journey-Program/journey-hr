import { AsideMenu } from '@/components/aside-menu';
import * as Styled from './page.styled';
import { CardWrapper } from '@/design-system';
import { PageProps } from './types';

export function Page({ children }: PageProps) {
  return (
    <Styled.Container>
      <Styled.menuContainer>
        <Styled.cardWrapper background="default">
          <AsideMenu></AsideMenu>
        </Styled.cardWrapper>
      </Styled.menuContainer>
      <Styled.contentContainer>
        <CardWrapper>{children}</CardWrapper>
      </Styled.contentContainer>
    </Styled.Container>
  );
}
