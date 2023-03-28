import { IDoodlesProps } from './types';
import * as Styled from './doodles.styled';

import { DoodlesLib } from './svgLibrary';

export function Doodles({ colors, icon }: IDoodlesProps) {
  const doodleIcon = icon && DoodlesLib[icon];

  return (
    <Styled.wrapper data-testId="doodles" colors={colors}>
      {doodleIcon}
    </Styled.wrapper>
  );
}
