import { Wrapper } from './short-happy-hour-wrapper.styled';
import { ShortHappyHourWrapperProps } from './types';

export function ShortHappyHourWrapper({
  children,
}: ShortHappyHourWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}
