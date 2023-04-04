import { Meta, Story } from '@storybook/react';
import { date, title } from './const';
import { ShortHappyHourWrapper } from './short-happy-hour-wrapper';
import { ShortHappyHourWrapperProps } from './types';

export default {
  component: ShortHappyHourWrapper,
  title: 'UI/ShortHappyHourWrapper',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<ShortHappyHourWrapperProps> = (args) => {
  return <ShortHappyHourWrapper {...args} />;
};

export const ShortHappyHourWrapperStory = Template.bind({});
ShortHappyHourWrapperStory.args = {
  childrenAppointment: title,
  childrenDate: date,
};
