import { Meta, Story } from '@storybook/react';

import { TimeOffType } from './time-off-type';
import { TimeOffTypeProps } from './types';

export default {
  component: TimeOffType,
  title: 'UI/TimeOffType',
  parameters: {
    isLoading: false,
    label: 'TimeOffType text',
  },
} as Meta;

const Template: Story<TimeOffTypeProps> = (args) => {
  return <TimeOffType {...args} />;
};

export const TimeOffTypeStory = Template.bind({});
