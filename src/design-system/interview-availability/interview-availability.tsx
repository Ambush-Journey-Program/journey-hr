import { SelectInput } from '../select-input';
import * as Styled from './interview-availability.styled';
import { IInterviewAvailabilityProps } from './types';

export function InterviewAvailability({ title }: IInterviewAvailabilityProps) {
  return (
    <>
      <Styled.InterviewAvailability>
        <Styled.Title>Technical Interview Availability</Styled.Title>
        <Styled.Subtitle>
          Schedule a technical interview for a candidate.
        </Styled.Subtitle>
      </Styled.InterviewAvailability>
      <SelectInput title={'Date:'}></SelectInput>
      <SelectInput title={'Shift:'}></SelectInput>
      <SelectInput title={'Area:'}></SelectInput>
      <SelectInput title={'Opportunity:'}></SelectInput>
    </>
  );
}
