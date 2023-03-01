import * as Styled from './avatar.styled';
import { AvatarProps } from './types';

export function Avatar({ ...props }: AvatarProps) {
  return <Styled.Image data-testid="Avatar" {...props} />;
}
