import * as Styled from './logo.styled';
import { LogoProps } from './types';
import { Logos } from './logosrc';

export function Logo({ colorVariant = 'red', variant }: LogoProps) {
  const logoVariant = variant && Logos[variant];

  return (
    <Styled.Image
      data-testid="Logo"
      colorVariant={colorVariant}
      alt={'Ambush logo'}
    >
      {logoVariant}
    </Styled.Image>
  );
}
