import * as Styled from './navbar.styled';
import { Avatar } from '../avatar';
import { ReactComponent as AmbushLogo } from './Union.svg';
import { CardWrapper } from '../card-wrapper';
import { NavBarProps } from './type';
import { NavBarLinks } from './navbarlinks';

export function NavBar({
  navigationLinks,
  avatarSrc = 'src/design-system/avatar/User-Photo.png',
  avatarSize,
}: NavBarProps) {
  console.log('teste');
  return (
    <Styled.NavBarWrapper>
      <CardWrapper>
        <Styled.NavBar>
          <Styled.LogoContainer>
            <AmbushLogo />
            <span>Ambush</span>
          </Styled.LogoContainer>
          <NavBarLinks navigationLinks={navigationLinks} />
          <Avatar src={avatarSrc} sizeVariant={avatarSize} />
        </Styled.NavBar>
      </CardWrapper>
    </Styled.NavBarWrapper>
  );
}
