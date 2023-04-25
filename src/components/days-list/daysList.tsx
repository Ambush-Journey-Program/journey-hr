import { DaysLists, HolidayRow, TeamCalendarRow, TimeOffRow } from '.';
import { holidays, teamCalendar, timeOff } from './daysLists/mockLists.js';
import { HolidaysList, TimeOffList, TeamCalendarList } from './daysLists/types';

export function DaysList() {
  return (
    <div>
      <DaysLists
        list={holidays}
        renderRow={(details) => (
          <HolidayRow details={details as HolidaysList} />
        )}
      />
      <DaysLists
        list={timeOff}
        renderRow={(details) => <TimeOffRow details={details as TimeOffList} />}
      />
      <DaysLists
        list={teamCalendar}
        renderRow={(details) => (
          <TeamCalendarRow details={details as TeamCalendarList} />
        )}
      />
    </div>
  );
}
