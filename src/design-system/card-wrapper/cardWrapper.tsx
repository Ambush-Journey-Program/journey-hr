import * as Styled from './cardWrapper.styled';
import { CardProps } from './cardWrapper.styled';

export default function CardWrapper({ children }: CardProps) {
  return <Styled.Card>{children}</Styled.Card>;
}
