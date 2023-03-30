import { LinksProps } from './type';
import * as Styled from './navbar.styled';

export function NavBarLinks({ navigationLinks, colors = 'light' }: LinksProps) {
  return (
    <Styled.LinkContainer colors={colors}>
      {navigationLinks.map((links) => (
        <li key={links.label}>
          <a href={links.url}>{links.label}</a>
        </li>
      ))}
    </Styled.LinkContainer>
  );
}
