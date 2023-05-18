import { Meta, Story } from '@storybook/react';
import { SelectPeriod } from './select-period';

export default {
  component: SelectPeriod,
  title: 'Components/SelectPeriod',
} as Meta;

const Template: Story = (args) => {
  return <SelectPeriod {...args} />;
};

export const SelectPeriodStory = Template.bind({});

