import * as Styled from './pageTimeOff.styled';
import { Button, CardWrapper } from '@ambush/ui';
import { Balance } from '@/components/balance';
import {
  DaysLists,
  HolidayRow,
  TeamCalendarRow,
  TimeOffRow,
} from '../../components/days-lists';
import {
  holidays,
  timeOff,
  teamCalendar,
} from '../../components/days-lists/mockLists';
import {
  HolidaysList,
  TimeOffList,
  TeamCalendarList,
} from '../../components/days-lists/types';
import { PageHeader } from '../../components/page-header';

export function PageTimeOff() {
  return (
    <>
      <Styled.TimeOffPageHeaderWrapper data-testid="PageTimeOff">
        <PageHeader
          title="Time Off"
          subtitle="Its Friday, Out 30"
          button={<Button>Apply Time Off</Button>}
        />
        <Balance
          availableDays={20}
          isAdmin={false}
          consumedDays={0}
          optionalHolidays={0}
        />
      </Styled.TimeOffPageHeaderWrapper>
      <Styled.TimeOffPageDaysListsGrid>
        <Styled.GridContainer1>
          <DaysLists
            title="Upcoming Holidays"
            buttonTitle="View Holiday Calendar"
            list={holidays}
            url="holiday-calendar"
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
            url="time-off-history"
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
            url="team-calendar"
            renderRow={(details) => (
              <TeamCalendarRow
                key={details.id}
                details={details as TeamCalendarList}
              />
            )}
          />
        </Styled.GridContainer3>
      </Styled.TimeOffPageDaysListsGrid>
    </>
  );
}
