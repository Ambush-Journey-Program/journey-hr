import { Meta, Story } from '@storybook/react';
import { InterviewTimes } from './interviewTimes';
import { InterviewOption, InterviewTimesProps } from './types';

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
  {
    id: 2,
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

export default {
  component: InterviewTimes,
  title: 'Components/InterviewTimes',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Schedule Card ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1',
              description: 'This is the Figma of Schedule Card',
            },
          ],
        },
      ],
    },
  },
} satisfies Meta;

const Template: Story<InterviewTimesProps> = (args) => {
  return <InterviewTimes {...args} />;
};

export const InterviewTimesStory = Template.bind({});
InterviewTimesStory.args = {
  interviewOptions: interviews,
};
