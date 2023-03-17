import { Meta, Story } from '@storybook/react';
import { InterviewTimes } from './interviewTimes';
import { InterviewOption, InterviewTimesProps } from './types';

const interviews: InterviewOption[] = [
  {
    id: 1,
    schedules: [
      {
        title: `UX Interview`,
        interviewerName: `Robson Lopes`,
        scheduleTime: '10:15 - 10:45',
      },
      {
        title: `UI Interview`,
        interviewerName: `Henrique Bittencourt`,
        scheduleTime: '10:45 - 11:30',
      },
    ],
  },
  {
    id: 2,
    schedules: [
      {
        title: `UX Interview`,
        interviewerName: `Robson Lopes`,
        scheduleTime: '10:15 - 10:45',
      },
      {
        title: `UI Interview`,
        interviewerName: `Henrique Bittencourt`,
        scheduleTime: '10:45 - 11:30',
      },
    ],
  },
];

export default {
  component: InterviewTimes,
  title: 'Component/InterviewTimes',
  parameters: {},
} as Meta;

const Template: Story<InterviewTimesProps> = (args) => {
  return <InterviewTimes {...args} />;
};

export const InterviewTimesStory = Template.bind({});
InterviewTimesStory.args = {
  interviewOptions: interviews,
};
