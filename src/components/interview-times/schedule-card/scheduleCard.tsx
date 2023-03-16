import { CardWrapper } from '../../../design-system/card-wrapper';
import { ScheduleCardProps } from '../types';
import * as Styled from './scheduleCard.styled';
import { Button } from '../../../design-system/button';

export function ScheduleCard({
  interviews,
  index,
  onClick,
}: ScheduleCardProps) {
  return (
    <CardWrapper>
      <Styled.scheduleCardList data-testid="ScheduleCard">
        <h2>Option #{index + 1}</h2>
        {interviews.interviewList.map((details, interviewIndex) => (
          <li key={interviewIndex}>
            <h3>{details.title}</h3>
            <p>{details.interviewerName}</p>
            <p>{details.interviewTime}</p>
          </li>
        ))}
        <Button data-testid="Button" icon="CalendarIcon" onClick={onClick}>
          Schedule
        </Button>
      </Styled.scheduleCardList>
    </CardWrapper>
  );
}
