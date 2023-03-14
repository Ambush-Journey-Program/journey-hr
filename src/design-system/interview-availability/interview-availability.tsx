import { Input } from '../input';
import * as Styled from './interview-availability.styled';
import { IInterviewAvailabilityProps } from './types';

export function InterviewAvailability({
  placeholder,
  ...props
}: IInterviewAvailabilityProps) {
  return (
    <>
      <Styled.InterviewAvailability>
        <Styled.Title>Technical Interview Availability</Styled.Title>
        <Styled.Subtitle>
          Schedule a technical interview for a candidate.
        </Styled.Subtitle>
      </Styled.InterviewAvailability>
      <Input label={'Date:'}></Input>
      <Input label={'Shift:'}></Input>
      <Input label={'Area:'}></Input>
      <Input label={'Opportunity:'}></Input>
    </>
  );
}
