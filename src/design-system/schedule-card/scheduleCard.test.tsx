import { describe, expect } from 'vitest';

import { render, screen } from '../../tests/renderWithProviders';

import { ScheduleCard } from './scheduleCard';

type Interview = {
  title: string;
  interviewerName: string;
  interviewTime: string;
};

export type Interviews = {
  option: number;
  interviewList: Interview[];
};

const interviews: Interviews[] = [
  {
    option: 1,
    interviewList: [
      {
        title: `UX Interview`,
        interviewerName: `Robson Lopes`,
        interviewTime: '10:15 - 10:45',
      },
      {
        title: `UI Interview`,
        interviewerName: `Henrique Bittencourt`,
        interviewTime: '10:45 - 11:30',
      },
    ],
  },
];

describe('<ScheduleCard />', () => {
  it('renders the ScheduleCard', () => {
    render(<ScheduleCard interviews={interviews} />);

    const ScheduleCardEl = screen.getByTestId('ScheduleCard');
    expect(ScheduleCardEl).toBeInTheDocument();
  });

  it('renders the ScheduleCard with the button', () => {
    render(<ScheduleCard interviews={interviews} />);
    const buttonEl = screen.getByText('Schedule');
    expect(buttonEl).toBeInTheDocument();
  });

  it('renders the ScheduleCard and validate interview list quantity', () => {
    render(<ScheduleCard interviews={interviews} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });
});
