import { Meta, Story } from '@storybook/react';

import { Balance } from './balance';
import { employees } from './mocking/holidays';

export default {
  component: Balance,
  title: 'Components/Balance',
} as Meta;

const Template: Story = (args) => {
  return <Balance currentUser={false} employees={employees} {...args} />;
};

export const BalanceStory = Template.bind({});
BalanceStory.args = {
  buttonText: 'View Time Off',
  curretUser: true,
  buttonClick: () => {},
};
