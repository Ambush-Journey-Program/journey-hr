import { Meta, Story } from '@storybook/react';
import { InterviewTimes } from './interviewTimes';
import { Interviews, InterviewTimesProps } from './types';

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
  interviewsList: interviews,
};
