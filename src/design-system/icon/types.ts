import { theme } from '@/styles/theme';
import * as HeroIconOutline from '@heroicons/react/24/outline';
import { SVGAttributes } from 'react';

export type IconProps = {
  color:
    | keyof (typeof theme.color)['auxiliary']
    | keyof (typeof theme.color)['brandColors']
    | keyof (typeof theme.color)['button']
    | keyof (typeof theme.color)['contrasts']
    | keyof (typeof theme.color)['gradients'];

  icon?: keyof typeof HeroIconOutline;
  size?: '16px' | '18px' | '20px' | '58px';
} & SVGAttributes<SVGElement>;
