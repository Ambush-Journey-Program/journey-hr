import { Meta, Story } from '@storybook/react';
import { OptionalHolidays } from './optional-holidays';


export default {
  component: OptionalHolidays,
  title: 'Components/OptionalHolidays',
} satisfies Meta;

const Template: Story = (args) => {
  return <OptionalHolidays {...args} />;
};

export const OptionalHolidaysStory = Template.bind({});
