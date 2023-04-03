import { Subtitle } from '../typography';
import { Wrapper } from './short-happy-hour-wrapper.styled';
import { ShortHappyHourWrapperProps } from './types';

export function ShortHappyHourWrapper({
  children,
}: ShortHappyHourWrapperProps) {
  return (
    <Wrapper>
      <div>
        <Subtitle variant="s4">Name of the event</Subtitle>
        {children}
      </div>
      <Subtitle variant="s4">Date:</Subtitle>
      {children}
    </Wrapper>
  );
}
