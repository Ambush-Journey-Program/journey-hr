import * as Icons from '@heroicons/react/24/outline';
import { MenuLinksProps } from './types';
import * as Styled from './aside-menu.styled';

export function MenuItem({ icon, children, url }: MenuLinksProps) {
  const TheIcon = icon && Icons[icon];
  const LinkIcon = TheIcon && <TheIcon data-testid="button-icon" />;

  return (
    <Styled.ListItem>
      <a href={url}>
        {LinkIcon} {children}
      </a>
    </Styled.ListItem>
  );
}