import * as Styled from './badge.styled';
import { IBadgeProps } from './types';
export function Badge({ text }: IBadgeProps) {
  return <Styled.badge>{text}</Styled.badge>;
}
