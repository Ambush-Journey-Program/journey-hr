import * as Styled from './cardWrapper.styled';
import { CardProps } from './types';

export default function CardWrapper({
  color = 'defaultColor',
  children,
}: CardProps) {
  return <Styled.Card color={color}>{children}</Styled.Card>;
}
