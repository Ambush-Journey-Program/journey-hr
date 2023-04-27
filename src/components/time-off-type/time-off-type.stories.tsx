import { Meta, Story } from '@storybook/react';
import { TimeOffType } from './time-off-type';

export default {
  component: TimeOffType,
  title: 'Components/TimeOffType',
  parameters: {
    isLoading: false,
    label: 'TimeOffType text',
  },
} as Meta;

const Template: Story = (args) => {
  return <TimeOffType {...args} />;
};

export const TimeOffTypeStory = Template.bind({});
