import * as Styled from './avatar.styled';
import { type AvatarProps } from './types';

export function Avatar({ src, sizeVariant = 'small', ...props }: AvatarProps) {
  return (
    <Styled.Image
      data-testid="Avatar"
      src={src}
      sizeVariant={sizeVariant}
      {...props}
    />
  );
}
