import { theme } from '@/styles/theme';
import * as HeroIconOutline from '@heroicons/react/24/outline';
import { SVGAttributes } from 'react';

export type IconProps = {
  color: keyof (typeof theme.color)['icon'];
  icon?: keyof typeof HeroIconOutline;
  size?: '16px' | '18px' | '20px' | '58px';
} & SVGAttributes<SVGElement>;
