import * as Styled from './avatar.styled';
import { AvatarProps } from './types';

export function Avatar({ src, sizeVariant = 'small', ...props }: AvatarProps) {
  return (
    <Styled.Image data-testid="Avatar" src={src} sizeVariant={sizeVariant} />
  );
}

export function A() {
  return <Avatar src="s" />;
}
