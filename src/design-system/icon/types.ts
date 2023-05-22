import { theme } from '@/styles/theme';
import * as HeroIconOutline from '@heroicons/react/24/outline';
import { SVGAttributes } from 'react';

type Keys =
  | keyof (typeof theme.color)['auxiliary']
  | keyof (typeof theme.color)['brandColors']
  | keyof (typeof theme.color)['button']
  | keyof (typeof theme.color)['contrasts'];

export type IconColors = {
  [key in Keys]: string;
};

export type IconProps = {
  color: Keys;
  icon?: keyof typeof HeroIconOutline;
  size?: '16px' | '18px' | '20px' | '58px';
} & SVGAttributes<SVGElement>;
