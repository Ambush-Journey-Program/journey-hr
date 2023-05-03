import { HolidaysList, TeamCalendarList, TimeOffList } from './types';

export const holidays: HolidaysList[] = [
  {
    id: '1',
    name: 'teste',
    date: 'Nov 02 Thu, 2023',
  },
  {
    id: '2',
    name: 'teste2',
    date: 'Nov 15 Wed, 2023',
  },
  {
    id: '3',
    name: 'teste3',
    date: 'Nov 23 Thu, 2023',
  },
];

export const timeOff: TimeOffList[] = [
  {
    id: '1',
    dateRange: 'Nov 02 Thu, 2023 - Nov 15 Wed, 2023',
    badge: 'teste',
  },
  {
    id: '2',
    dateRange: 'Nov 15 Wed, 2023',
    badge: 'teste2',
  },
  {
    id: '3',
    dateRange: 'Nov 15 Wed, 2023 - Nov 23 Thu, 2023',
    badge: 'teste3',
  },
];

export const teamCalendar: TeamCalendarList[] = [
  {
    id: '1',
    name: 'teste',
    dateRange: 'Nov 02 Thu, 2023 - Nov 15 Wed, 2023',
    badge: 'teste',
  },
  {
    id: '2',
    name: 'teste2',
    dateRange: 'Nov 15 Wed, 2023',
    badge: 'teste2',
  },
  {
    id: '3',
    name: 'teste3',
    dateRange: 'Nov 15 Wed, 2023 - Nov 23 Thu, 2023',
    badge: 'teste3',
  },
];
