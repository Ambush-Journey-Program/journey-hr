import { IconProps } from './types';
import * as IconsHero from '@heroicons/react/24/outline';
import { useTheme } from 'styled-components';

export function Icon({ color, icon, size }: IconProps) {
  const TheIcon = icon && IconsHero[icon];
  const theme = useTheme();
  const iconColor = theme.color.icon[color];

  return (
    <>
      {TheIcon && (
        <TheIcon color={iconColor} width={size} data-testid="test-icon" />
      )}
    </>
  );
}
