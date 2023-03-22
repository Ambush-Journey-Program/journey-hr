import { Meta, Story } from '@storybook/react';
import { InterviewAvailability } from './interview-availability';
import { IInterviewAvailabilityProps } from './types';

const exampleOptions = [
  {
    label: 'Morning',
    value: '1',
  },
  {
    label: 'Afternoon',
    value: '2',
  },
  {
    label: 'Evening',
    value: '3',
  },
];

export default {
  component: InterviewAvailability,
  title: 'Components/InterviewAvailability',
  parameters: {
    isLoading: false,
    title: 'InterviewAvailability text',
    // options: exampleOptions,
    required: true,
  },
} as Meta;

const Template: Story<IInterviewAvailabilityProps> = (args) => {
  return <InterviewAvailability {...args} />;
};

export const InterviewAvailabilityStory = Template.bind({});
InterviewAvailabilityStory.args = {
  title: 'Title',
  // options: exampleOptions,
  required: true,
};
