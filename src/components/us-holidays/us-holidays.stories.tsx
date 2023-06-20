import { Meta, Story } from '@storybook/react';
import { USHolidays } from './us-holidays';
import { USHolidaysProps } from './types';

export default {
  component: USHolidays,
  title: 'Components/USHolidays',
} as Meta;

const Template: Story<USHolidaysProps> = (args) => {
  return <USHolidays {...args} />;
};

export const USHolidaysStory = Template.bind({});
