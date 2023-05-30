import * as Styled from './pageTimeOff.styled';
import { Button, CardWrapper } from '@ambush/ui';
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
import { PageHeader } from '../page-header';

export function PageTimeOff() {
  return (
    <CardWrapper>
      <Styled.TimeOffPageHeaderWrapper data-testid="PageTimeOff">
        <PageHeader
          title="Time Off"
          subtitle="Its Friday, Out 30"
          button={<Button>Apply Time Off</Button>}
        />
        <Balance availableDays={20} isAdmin={false} consumedDays={0} optionalHolidays={0} />
      </Styled.TimeOffPageHeaderWrapper>
      <Styled.TimeOffPageDaysListsGrid>
        <Styled.GridContainer1>
          <DaysLists
            title="Upcoming Holidays"
            buttonTitle="View Holiday Calendar"
            list={holidays}
            renderRow={(details) => (
              <HolidayRow key={details.id} details={details as HolidaysList} />
            )}
          />
        </Styled.GridContainer1>
        <Styled.GridContainer2>
          <DaysLists
            title="Upcoming Time Off"
            buttonTitle="View My Time Off"
            list={timeOff}
            renderRow={(details) => (
              <TimeOffRow key={details.id} details={details as TimeOffList} />
            )}
          />
        </Styled.GridContainer2>
        <Styled.GridContainer3>
          <DaysLists
            title="My Team's Calendar"
            buttonTitle="View My Team's Calendar"
            list={teamCalendar}
            renderRow={(details) => (
              <TeamCalendarRow key={details.id} details={details as TeamCalendarList} />
            )}
          />
        </Styled.GridContainer3>
      </Styled.TimeOffPageDaysListsGrid>
    </CardWrapper>
  );
}
