import { StaticImageData } from 'next/image';

type LinkList = Link[];

export type ColorProps = 'dark' | 'light';

export type NavBarProps = {
  navigationLinks: LinkList;
  avatarSrc?: StaticImageData;
  colors: ColorProps;
};

export type Link = {
  url: string;
  label: string;
  active: boolean;
};

export type LinksProps = {
  navigationLinks: LinkList;
  colors: ColorProps;
};
