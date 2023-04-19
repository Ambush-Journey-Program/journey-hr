import { Meta, Story } from '@storybook/react';
import { OptionalHolidays } from './optional-holidays';
import { OptionalHolidaysProps } from './types';

export default {
  component: OptionalHolidays,
  title: 'Components/OptionalHolidays',
} as Meta;

const Template: Story<OptionalHolidaysProps> = (args) => {
  return <OptionalHolidays {...args} />;
};

export const OptionalHolidaysStory = Template.bind({});
