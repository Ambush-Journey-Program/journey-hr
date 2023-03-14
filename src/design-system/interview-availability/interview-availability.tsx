import { SelectInput } from '../select-input';
import * as Styled from './interview-availability.styled';
import { IInterviewAvailabilityProps } from './types';

export function InterviewAvailability(IInterviewAvailabilityProps) {
  return (
    <>
      <Styled.InterviewAvailability>
        <Styled.Title>Technical Interview Availability</Styled.Title>
        <Styled.Subtitle>
          Schedule a technical interview for a candidate.
        </Styled.Subtitle>
      </Styled.InterviewAvailability>
      <SelectInput label={'Date:'}></SelectInput>
      <SelectInput label={'Shift:'}></SelectInput>
      <SelectInput label={'Area:'}></SelectInput>
      <SelectInput label={'Opportunity:'}></SelectInput>
    </>
  );
}
