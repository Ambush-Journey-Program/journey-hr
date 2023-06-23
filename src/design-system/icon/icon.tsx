/* eslint-disable multiline-ternary */
import { IconColors, IconProps } from './types';
import * as IconsHero from '@heroicons/react/24/outline';
import { useTheme } from 'styled-components';

export function Icon({ color, icon, size = '1.5rem' }: IconProps) {
  const TheIcon = icon && IconsHero[icon];
  const theme = useTheme();
  const iconColor: IconColors = {
    ...theme.color.button,
    ...theme.color.auxiliary,
    ...theme.color.contrasts,
    ...theme.color.auxiliary,
    ...theme.color.brandColors,
  };

  return TheIcon ? (
    <TheIcon
      color={iconColor[color]}
      width={size}
      aria-label="icon"
      height='1.5rem'
    />
  ) : null;
}
