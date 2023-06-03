import * as Styled from './logo.styled';
import { ILogoProps } from './types';
import { Logos } from './logosrc';

export function Logo({colors,logoVariation}: ILogoProps) {
  const logoVariant = logoVariation && Logos[logoVariation];

  return (
    <Styled.Image
      data-testid="Logo"
      colors={colors}
      alt="Ambush logo"
    >
      {logoVariant}
    </Styled.Image>
  );
}
