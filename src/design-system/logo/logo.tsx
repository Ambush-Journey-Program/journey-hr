import * as Styled from './logo.styled';
import { ILogoProps } from './types';
import { Logos } from './logosrc';

<<<<<<< HEAD
export function Logo({colorVariant,logoVariation}: ILogoProps) {
=======
export function Logo({colors,logoVariation}: ILogoProps) {
>>>>>>> 9a50f8d (Refactor: fixed Doodles and Logo)
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
