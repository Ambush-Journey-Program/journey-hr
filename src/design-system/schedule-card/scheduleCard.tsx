import { CardWrapper } from '../card-wrapper';
import { ScheduleCardProps } from './types';
import * as Styled from './scheduleCard.styled';
import { Button } from '../button';

export function ScheduleCard({ interviews }: ScheduleCardProps) {
  return (
    <CardWrapper>
      {interviews.map((interview, index) => (
        <Styled.scheduleCardList data-testid="ScheduleCard">
          <h2 key={index}>Option #{index + 1}</h2>
          {interview.interviewList.map((details, index) => (
            <li key={index}>
              <h3>{details.title}</h3>
              <p>{details.interviewerName}</p>
              <p>{details.interviewTime}</p>
            </li>
          ))}
          <Button data-testid="Button" icon="CalendarIcon" onClick={() => {}}>
            Schedule
          </Button>
        </Styled.scheduleCardList>
      ))}
    </CardWrapper>
  );
}
