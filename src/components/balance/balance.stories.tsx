import { Meta, Story } from '@storybook/react';
import { Balance } from './balance';
import { employees } from './mocking/holidays';

export default {
  component: Balance,
  title: 'Components/Balance',
} satisfies Meta;

const Template: Story = (args) => {
  return (
    <Balance
      title=""
      optionalHolidays={0}
      consumedDays={0}
      nextRefill="Mar 24, 2024"
      availableDays={0}
      isAdmin={false}
      employees={employees}
      {...args}
    />
  );
};

export const BalanceStoryWithCTA = Template.bind({});
BalanceStoryWithCTA.args = {
  buttonText: 'View Time Off',
  isAdmin: true,
  buttonClick: () => {},
  availableDays: -1,
  nextRefill: 'Mar 15, 2024',
  consumedDays: 21,
  optionalHolidays: 2,
  title: 'Your Current Balance',
};

export const BalanceStory = Template.bind({});
BalanceStory.args = {
  isAdmin: true,
  availableDays: 20,
  nextRefill: 'Mar 24, 2024',
  optionalHolidays: 0,
  title: 'Your Current Balance',
};
