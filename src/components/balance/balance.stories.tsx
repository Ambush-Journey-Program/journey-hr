import { Meta, Story } from '@storybook/react';

import { Balance } from './balance';
import { employees } from './mocking/holidays';

export default {
  component: Balance,
  title: 'Components/Balance',
} as Meta;

const Template: Story = (args) => {
  return <Balance employees={employees} {...args} />;
};

export const BalanceStory = Template.bind({});
