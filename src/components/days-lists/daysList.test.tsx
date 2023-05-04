import { render, screen } from '@/tests/renderWithProviders';
import { DaysLists } from './daysLists';
import { teamCalendar, holidays, timeOff } from './mockLists';
import { TimeOffList, HolidaysList, TeamCalendarList } from './types';
import { TimeOffRow } from './daysListsRow/TimeOffRow';
import { HolidayRow } from './daysListsRow/HolidayRow';
import { TeamCalendarRow } from './daysListsRow/TeamCalendarRow';

describe('<ScheduleCard />', () => {
  it('renders the holiday list', () => {
    render(
      <DaysLists
        title="holidayRow"
        buttonTitle="test"
        list={holidays}
        renderRow={(details) => (
          <HolidayRow key={details.id} details={details as HolidaysList} />
        )}
      />,
    );

    const HolidayListEl = screen.getByTestId('holidayRow');
    expect(HolidayListEl).toBeInTheDocument();
  });

  it('renders the time off list', () => {
    render(
      <DaysLists
        title="timeOffRow"
        buttonTitle="test"
        list={timeOff}
        renderRow={(details) => <TimeOffRow key={details.id} details={details as TimeOffList} />}
      />,
    );

    const TimeOffListEl = screen.getByTestId('timeOffRow');
    expect(TimeOffListEl).toBeInTheDocument();
  });

  it('renders the team calendar list', () => {
    render(
      <DaysLists
        title="teamCalendar"
        buttonTitle="test"
        list={teamCalendar}
        renderRow={(details) => (
          <TeamCalendarRow key={details.id} details={details as TeamCalendarList} />
        )}
      />,
    );

    const TeamCalendarRowEl = screen.getByTestId('teamCalendar');
    expect(TeamCalendarRowEl).toBeInTheDocument();
  });

  it('renders the list and validate the list quantity', () => {
    render(
      <DaysLists
        title="test"
        buttonTitle="test"
        list={timeOff}
        renderRow={(details) => <TimeOffRow key={details.id} details={details as TimeOffList} />}
      />,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});
