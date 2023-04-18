type LinkList = Link[];

export type ColorProps = 'dark' | 'light';

export interface NavBarProps {
  navigationLinks: LinkList;
  avatarSrc?: string;
  colors: ColorProps;
}

export interface Link {
  url: string;
  label: string;
  active: boolean;
}

export interface LinksProps {
  navigationLinks: LinkList;
  colors: ColorProps;
}
