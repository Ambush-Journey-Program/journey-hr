export type HolidaysList = {
  id: string;
  name: string;
  date: string;
};

export type TimeOffList = {
  id: string;
  dateRange: string;
  badge: string;
};

export type TeamCalendarList = {
  id: string;
  name: string;
  dateRange: string;
  badge: string;
};

export type HolidaysListProps = {
  details: HolidaysList;
};

export type TimeOffListProps = {
  details: TimeOffList;
};

export type TeamCalendarListProps = {
  details: TeamCalendarList;
};

export type DaysListsProps = {
  storyType?: string;
  title: string;
  buttonTitle: string;
  url: string;
  list: HolidaysList[] | TimeOffList[] | TeamCalendarList[];
  renderRow: (
    details: HolidaysList | TimeOffList | TeamCalendarList,
  ) => JSX.Element;
};
