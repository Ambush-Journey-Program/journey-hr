import { render, screen } from '@/tests/renderWithProviders';
import { InterviewTimes } from '.';
import { InterviewOption } from './types';

const interviews: InterviewOption[] = [
  {
    id: 1,
    schedules: [
      {
        title: 'UX Interview',
        interviewerName: 'Robson Lopes',
        scheduleTime: '10:15 - 10:45',
      },
      {
        title: 'UI Interview',
        interviewerName: 'Henrique Bittencourt',
        scheduleTime: '10:45 - 11:30',
      },
    ],
  },
];

describe('<ScheduleCard />', () => {
  it('renders the InterviewTimes', () => {
    render(<InterviewTimes onClick={jest.fn()} interviewOptions={interviews} />);

    const InterviewTimesEl = screen.getByTestId('InterviewTimes');
    expect(InterviewTimesEl).toBeInTheDocument();
  });

  it('renders the ScheduleCards and validate interview list quantity', () => {
    render(<InterviewTimes onClick={jest.fn()} interviewOptions={interviews} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });
});
