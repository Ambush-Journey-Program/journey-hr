import * as Styled from './cardWrapper.styled';
import { CardWrapperProps } from './types';

export default function CardWrapper({ children, variant }: CardWrapperProps) {
  return <Styled.CardWrapper variant={variant}>{children}</Styled.CardWrapper>;
}
