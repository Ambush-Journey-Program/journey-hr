export type Link = {
  url: string;
  label: string;
  active: boolean;
};

type LinkList = Link[];

export type NavBarProps = {
  navigationLinks: LinkList;
  avatarSrc?: string;
  avatarSize?: string;
};

export type LinksProps = {
  navigationLinks: LinkList;
};
