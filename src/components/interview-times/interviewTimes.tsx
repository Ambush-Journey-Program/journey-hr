import { ScheduleCard } from '.';
import { InterviewTimesProps } from './types';
import * as Styled from './interviewTimes.styled';

export function InterviewTimes({
  interviewsList,
  onClick,
}: InterviewTimesProps) {
  return (
    <Styled.InterviewTimesWrapper data-testid="InterviewTimes">
      {interviewsList.map((interview, index) => (
        <ScheduleCard
          interviews={interview}
          key={index}
          index={index}
          onClick={onClick}
        />
      ))}
    </Styled.InterviewTimesWrapper>
  );
}
