import * as Icons from "@heroicons/react/24/outline";
import { MenuLinksProps } from "./types";
import * as Styled from "./aside-menu.styled";
import Link from "next/link";

export function MenuItem({ icon, children, url }: MenuLinksProps) {
  const TheIcon = icon && Icons[icon];
  const LinkIcon = TheIcon && <TheIcon data-testid="button-icon" />;

  return (
    <Styled.ListItem>
      <Link href={url}>
        {LinkIcon} {children}
      </Link>
    </Styled.ListItem>
  );
}
