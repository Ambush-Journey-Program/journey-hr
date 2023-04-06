import { Wrapper } from './happy-hour-edit.styled';
import { HappyHourEditProps } from './types';

export function HappyHourEdit({ label }: HappyHourEditProps) {
  return <Wrapper>{label}</Wrapper>;
}
