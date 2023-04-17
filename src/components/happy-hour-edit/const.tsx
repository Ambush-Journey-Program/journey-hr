import { Employees, Guests } from './types';

export let guestsListData: Guests[] = [
  { guest: { id: '1', name: 'Bariana Maia', team: 'Design' } },
  { guest: { id: '2', name: 'Marcello Aragoni', team: 'Developer' } },
  { guest: { id: '3', name: 'Lucas Medeiros', team: 'Developer' } },
  { guest: { id: '4', name: 'Claudia da Silva', team: 'Design' } },
  { guest: { id: '15', name: 'Test', team: 'list' } },
];
export const employees: Employees[] = [
  {
    guest: {
      id: '5',
      name: 'Ana Urbano',
      team: 'design',
    },
  },
  {
    guest: {
      id: '6',
      name: 'Caio Caixão',
      team: 'Ruby',
    },
  },
  {
    guest: {
      id: '7',
      name: 'Dan Donatello',
      team: 'Java',
    },
  },
  {
    guest: {
      id: '8',
      name: 'Bruna Caiado',
      team: 'design',
    },
  },
  {
    guest: {
      id: '9',
      name: 'Caio Caiado',
      team: 'Ruby',
    },
  },
];
{
  /* <GuestList guestsList={guests} />;

import { GuestList } from './guest-list';
import { guests } from './guest-list/mocking-list'; */
}
