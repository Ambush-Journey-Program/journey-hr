import { CardWrapper } from '../card-wrapper';
import { ScheduleCardProps } from './types';
import * as Styled from './scheduleCard.styled';
import { Button } from '../button';

export function ScheduleCard({ interviews }: ScheduleCardProps) {
  return (
    <Styled.scheduleCardWrapper data-testid="ScheduleCard">
      <CardWrapper>
        <div>
          {interviews.map((interview) => (
            <Styled.scheduleCardList>
              <h2>Option #{interview.option}</h2>
              {interview.interviewList.map((details) => (
                <li>
                  <h3>{details.title}</h3>
                  <p>{details.interviewerName}</p>
                  <p>{details.interviewTime}</p>
                </li>
              ))}
              <Button
                data-testid="Button"
                icon="CalendarIcon"
                onClick={() => {}}
              >
                Schedule
              </Button>
            </Styled.scheduleCardList>
          ))}
        </div>
      </CardWrapper>
    </Styled.scheduleCardWrapper>
  );
}
