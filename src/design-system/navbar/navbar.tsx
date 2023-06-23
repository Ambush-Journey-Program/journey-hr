import * as Styled from './navbar.styled';
import { Avatar } from '../avatar';
import { CardWrapper } from '../card-wrapper';
import { LinksProps, NavBarProps } from './type';
import { NavBarLinks } from './navbarlinks';
import { Logo } from '../logo';

export function NavBar({
  navigationLinks,
  avatarSrc = '/static/images/UserPhoto.png',
  colors,
}: NavBarProps & LinksProps) {
  return (
    <Styled.NavBarWrapper data-testid="NavBar">
      <CardWrapper>
        <Styled.NavBar>
          <Styled.LogoContainer>
            <Logo logoVariation="horizontal" colorVariant="dark"></Logo>
          </Styled.LogoContainer>
          <NavBarLinks
            colors={colors}
            navigationLinks={navigationLinks}
            data-testid="Links"
          />
          <Avatar src={avatarSrc} sizeVariant="small" data-testid="Avatar" />
        </Styled.NavBar>
      </CardWrapper>
    </Styled.NavBarWrapper>
  );
}
