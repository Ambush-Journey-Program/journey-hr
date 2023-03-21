import { DoodlesProps, IDoodlesProps } from './types';
import * as Styled from './doodles.styled';

export function Doodles({ src, fill, ...props }: DoodlesProps) {
  const doodles = {
    spinningArrow: 'src/design-system/doodles/assets/spinning_arrow.svg',
    bubble: 'src/design-system/doodles/assets/bubble.svg',
    highlight:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/highlights.svg',
    star1:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/star1.svg',
    star2:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/star2.svg',
    circled:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/circled.svg',
    underlined:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/underlined.svg',
    arrow1:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/arrow1.svg',
    arrow2:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/arrow2.svg',
    arrow3:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/arrow3.svg',
    arrow4:
      '/Users/marianalima/dev/journey-hr/src/design-system/doodles/assets/arrow4.svg',
  };

  return <Styled.Image src={} fill="red" />;
}
