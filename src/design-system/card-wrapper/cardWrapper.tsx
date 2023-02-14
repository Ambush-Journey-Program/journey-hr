import * as Styled from './cardWrapper.styled';
import { WrapperProps } from './types';

export default function Wrapper({ children, variant }: WrapperProps) {
  return <Styled.Wrapper variant={variant}>{children}</Styled.Wrapper>;
}
