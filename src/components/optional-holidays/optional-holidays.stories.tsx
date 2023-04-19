import { Meta, Story } from '@storybook/react';

import { OptionalHolidays } from './optional-holidays';
import { IOptionalHolidaysProps } from './types';

export default {
  component: OptionalHolidays,
  title: 'Components/OptionalHolidays',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<IOptionalHolidaysProps> = (args) => {
  return <OptionalHolidays {...args} />;
};

export const OptionalHolidaysStory = Template.bind({});
