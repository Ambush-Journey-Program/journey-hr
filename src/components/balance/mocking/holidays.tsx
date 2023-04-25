import { Avatar } from '@/design-system';
import { Employees } from '../types';

export const employees: Employees[] = [
  {
    employee: {
      value: '1',
      label: 'Ana Urbano',
      avatar: <Avatar src={'../../../design-system/avatar/User-Photo.png'} />,
    },
  },
  {
    employee: {
      value: '2',
      label: 'Caio Caixão',
      avatar: <Avatar src={''} />,
    },
  },
  {
    employee: {
      value: '3',
      label: 'Dan Donatello',
      avatar: <Avatar src={''} />,
    },
  },
];
