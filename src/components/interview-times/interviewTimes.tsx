import { ScheduleCard } from '.';
import { InterviewTimesProps } from './types';
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
