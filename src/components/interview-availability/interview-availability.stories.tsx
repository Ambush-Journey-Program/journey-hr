import { type Meta, type Story } from '@storybook/react';
import { InterviewAvailability } from './interview-availability';
import { type IInterviewAvailabilityProps } from './types';

export default {
  component: InterviewAvailability,
  title: 'Components/InterviewAvailability',
  parameters: {},
} as Meta;

const Template: Story<IInterviewAvailabilityProps> = (args) => {
  return <InterviewAvailability {...args} />;
};

export const InterviewAvailabilityStory = Template.bind({});
InterviewAvailabilityStory.args = {};
