import { Meta, Story } from '@storybook/react';
import { BrazilianHolidays } from './brazilian-holidays';

export default {
  component: BrazilianHolidays,
  title: 'Components/BrazilianHolidays',
} as Meta;

const Template: Story = (args) => {
  return <BrazilianHolidays {...args} />;
};

export const BrazilianHolidaysStory = Template.bind({});
