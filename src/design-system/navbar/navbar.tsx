import * as Styled from './navbar.styled';
import { Avatar } from '../avatar';
import { ReactComponent as AmbushLogo } from './Union.svg';
import { CardWrapper } from '../card-wrapper';
import { NavBarProps } from './type';
import { NavBarLinks } from './navbarlinks';

console.log(AmbushLogo);

export function NavBar({
  navigationLinks,
  avatarSrc = 'src/design-system/avatar/User-Photo.png',
}: NavBarProps) {
  console.log('teste');
  return (
    <Styled.NavBarWrapper data-testid="NavBar">
      <CardWrapper>
        <Styled.NavBar>
          <Styled.LogoContainer>
            <AmbushLogo />
            <span>Ambush</span>
          </Styled.LogoContainer>
          <NavBarLinks navigationLinks={navigationLinks} data-testid="Links" />
          <Avatar src={avatarSrc} sizeVariant="small" data-testid="Avatar" />
        </Styled.NavBar>
      </CardWrapper>
    </Styled.NavBarWrapper>
  );
}
