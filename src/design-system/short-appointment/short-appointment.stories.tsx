import { type Meta, type Story } from '@storybook/react';
import { ShortHappyHour } from './short-appointment';
import { type ShortHappyHourProps } from './types';
const title = 'Pizza and Games';
const date = '01/02/2023';
export default {
  component: ShortHappyHour,
  title: 'UI/ShortHappyHour',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<ShortHappyHourProps> = (args) => {
  return <ShortHappyHour {...args} />;
};

export const ShortHappyHourStory = Template.bind({});
ShortHappyHourStory.args = {
  appointment: title,
  date,
};
