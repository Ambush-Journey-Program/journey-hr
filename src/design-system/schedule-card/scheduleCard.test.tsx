import { describe, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import { ScheduleCard } from './scheduleCard';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

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
    render(
      <ThemeProvider theme={theme}>
        <ScheduleCard interviews={interviews} />
      </ThemeProvider>,
    );

    const ScheduleCardEl = screen.getByTestId('ScheduleCard');
    expect(ScheduleCardEl).toBeInTheDocument();
  });

  it('renders the ScheduleCard with the button', () => {
    render(
      <ThemeProvider theme={theme}>
        <ScheduleCard interviews={interviews} />
      </ThemeProvider>,
    );
    const buttonEl = screen.getByTestId('Button');
    expect(buttonEl).toBeInTheDocument();
  });

  it('renders the ScheduleCard and validate interview list quantity', () => {
    render(
      <ThemeProvider theme={theme}>
        <ScheduleCard interviews={interviews} />
      </ThemeProvider>,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });
});
