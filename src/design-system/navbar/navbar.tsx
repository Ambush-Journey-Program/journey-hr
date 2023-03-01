import * as Styled from './navbar.styled';
import { Avatar } from '../avatar';
import { ReactComponent as AmbushLogo } from './Union.svg';
import { CardWrapper } from '../card-wrapper';

export function NavBar() {
  console.log('teste');
  return (
    <Styled.NavBarWrapper>
      <CardWrapper>
        <Styled.NavBar>
          <Styled.LogoContainer>
            <AmbushLogo />
            <span>Ambush</span>
          </Styled.LogoContainer>
          <Styled.LinkContainer>
            <li>
              <a href="#">Interviews</a>
            </li>
            <li>
              <a href="#">Happy Hour</a>
            </li>
            <li>
              <a href="#">Feedbacks</a>
            </li>
            <li>
              <a href="#">Send a Invite</a>
            </li>
            <li>
              <a href="#">Shorty</a>
            </li>
          </Styled.LinkContainer>
          <Avatar src="src/design-system/avatar/User-Photo.png" />
        </Styled.NavBar>
      </CardWrapper>
    </Styled.NavBarWrapper>
  );
}
