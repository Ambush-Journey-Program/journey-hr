import { Meta, Story } from '@storybook/react';

import { Balance } from './balance';

export default {
  component: Balance,
  title: 'Components/Balance',
} as Meta;

const Template: Story = (args) => {
  return <Balance {...args} />;
};

export const BalanceStory = Template.bind({});
