import * as Styled from './cardWrapper.styled';
import { CardProps } from './types';

export default function CardWrapper({
  colorVariant = 'default',
  children,
}: CardProps) {
  return <Styled.Card colorVariant={colorVariant}>{children}</Styled.Card>;
}
