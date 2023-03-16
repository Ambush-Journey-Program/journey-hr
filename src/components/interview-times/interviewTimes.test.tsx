import { describe, expect } from 'vitest';

import { render, screen } from '../../tests/renderWithProviders';

import { InterviewTimes } from './interviewTimes';
import { Interviews } from './types';

const interviews: Interviews[] = [
  {
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
  it('renders the InterviewTimes', () => {
    render(<InterviewTimes onClick={vi.fn()} interviewsList={interviews} />);

    const InterviewTimesEl = screen.getByTestId('InterviewTimes');
    expect(InterviewTimesEl).toBeInTheDocument();
  });

  it('renders the ScheduleCards and validate interview list quantity', () => {
    render(<InterviewTimes onClick={vi.fn()} interviewsList={interviews} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });
});
