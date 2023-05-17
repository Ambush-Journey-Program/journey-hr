import { Wrapper } from './icons.styled';
import { IconsProps } from './types';

export function Icons({ label }: IconsProps) {
  return <Wrapper>{label}</Wrapper>;
}
