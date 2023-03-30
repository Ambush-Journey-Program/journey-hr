import { CardWrapper, Button } from "@ambush/ui";
import { ScheduleCardProps } from "../types";
import * as Styled from "./scheduleCard.styled";

export function ScheduleCard({
  interviews,
  index,
  onClick,
}: ScheduleCardProps) {
  return (
    <CardWrapper>
      <Styled.scheduleCardList data-testid="ScheduleCard">
        <h2>Option #{index + 1}</h2>
        {interviews.schedules.map((details, interviewIndex) => (
          <li key={interviewIndex}>
            <h3>{details.title}</h3>
            <p>{details.interviewerName}</p>
            <p>{details.scheduleTime}</p>
          </li>
        ))}
        <Button icon="CalendarIcon" onClick={onClick}>
          Schedule
        </Button>
      </Styled.scheduleCardList>
    </CardWrapper>
  );
}
