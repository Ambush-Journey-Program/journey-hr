import { LinksProps } from './type';
import * as Styled from './navbar.styled';

export function NavBarLinks({ navigationLinks }: LinksProps) {
  return (
    <Styled.LinkContainer>
      {navigationLinks.map((links) => (
        <li key={links.label}>
          <a href={links.url}>{links.label}</a>
        </li>
      ))}
    </Styled.LinkContainer>
  );
}
