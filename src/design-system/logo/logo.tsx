import * as Styled from './logo.styled';
import { ILogoProps } from './types';
import { Logos } from './logosrc';

export function Logo({ colorVariant, logoVariation }: ILogoProps) {
  const logoVariant = logoVariation && Logos[logoVariation];

  return (
    <Styled.Image
      data-testid="Logo"
      colorVariant={colorVariant}
      alt="Ambush logo"
    >
      {logoVariant}
    </Styled.Image>
  );
}
