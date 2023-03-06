import * as Styled from './cardWrapper.styled';
import { CardProps } from './types';

export function CardWrapper({ background, children }: CardProps) {
  return <Styled.Card background={background}>{children}</Styled.Card>;
}
