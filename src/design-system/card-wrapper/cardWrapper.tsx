import * as Styled from './cardWrapper.styled';
import { type CardProps } from './types';

export function CardWrapper({ background, children }: CardProps) {
  return <Styled.Card background={background}>{children}</Styled.Card>;
}
