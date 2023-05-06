import * as Styled from './pageTimeOff.styled';
import { Button, CardWrapper, Subtitle, Title } from '@/design-system';
import { Balance } from '../balance';
import {
  DaysLists,
  HolidayRow,
  TeamCalendarRow,
  TimeOffRow,
} from '../days-lists';
import { holidays, timeOff, teamCalendar } from '../days-lists/mockLists';
import {
  HolidaysList,
  TimeOffList,
  TeamCalendarList,
} from '../days-lists/types';

export function PageTimeOff() {
  return (
    <CardWrapper>
      <Styled.TimeOffPageHeaderWrapper data-testid="PageTimeOff">
        <Styled.TimeOffPageHeader>
          <Styled.TimeOffPageTitle>
            <Title variant="h5">Time Off</Title>
            <Subtitle fontWeight="hair" variant="s5">
              Its Friday, Out 30
            </Subtitle>
          </Styled.TimeOffPageTitle>
          <Styled.TimeOffPageApplyButton>
            <Button>Apply Time Off</Button>
          </Styled.TimeOffPageApplyButton>
        </Styled.TimeOffPageHeader>
        <Balance availableDays={20} isAdmin={false} />
      </Styled.TimeOffPageHeaderWrapper>
      <Styled.TimeOffPageDaysListsGrid>
        <Styled.GridContainer1>
          <DaysLists
            title="Upcoming Holidays"
            buttonTitle="View Holiday Calendar"
            list={holidays}
            renderRow={(details) => (
              <HolidayRow details={details as HolidaysList} />
            )}
          />
        </Styled.GridContainer1>
        <Styled.GridContainer2>
          <DaysLists
            title="Upcoming Time Off"
            buttonTitle="View My Time Off"
            list={timeOff}
            renderRow={(details) => (
              <TimeOffRow details={details as TimeOffList} />
            )}
          />
        </Styled.GridContainer2>
        <Styled.GridContainer3>
          <DaysLists
            title="My Team's Calendar"
            buttonTitle="View My Team's Calendar"
            list={teamCalendar}
            renderRow={(details) => (
              <TeamCalendarRow details={details as TeamCalendarList} />
            )}
          />
        </Styled.GridContainer3>
      </Styled.TimeOffPageDaysListsGrid>
    </CardWrapper>
  );
}
