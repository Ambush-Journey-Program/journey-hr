import * as Styled from './avatar.styled';
import { AvatarProps } from './types';

export function Avatar({
  src,
  sizeVariant = 'default',
  ...props
}: AvatarProps) {
  return (
    <Styled.Image
      data-testid="Avatar"
      src={src}
      sizeVariant={sizeVariant}
      {...props}
    />
  );
}
