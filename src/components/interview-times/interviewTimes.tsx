import { ScheduleCard } from '.';
import { type InterviewTimesProps } from './types';
import * as Styled from './interviewTimes.styled';

export function InterviewTimes({
  interviewOptions,
  onClick,
}: InterviewTimesProps) {
  return (
    <Styled.InterviewTimesWrapper data-testid="InterviewTimes">
      {interviewOptions.map((interview, index) => (
        <ScheduleCard
          interviews={interview}
          key={interview.id}
          index={index}
          onClick={onClick}
        />
      ))}
    </Styled.InterviewTimesWrapper>
  );
}
