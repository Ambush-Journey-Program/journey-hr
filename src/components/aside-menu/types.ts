import * as HeroIcons from '@heroicons/react/24/solid';

export type MenuLinksProps = {
  children?: string;
  icon?: keyof typeof HeroIcons;
  url: string;
};
