import { Meta, Story } from '@storybook/react';
import { SelectPeriod } from './select-period';

export default {
  component: SelectPeriod,
  title: 'UI/SelectPeriod',
  parameters: {
    isLoading: false,
    label: 'SelectPeriod text',
  },
} as Meta;

const Template: Story = (args) => {
  return <SelectPeriod {...args} />;
};

export const SelectPeriodStory = Template.bind({});
SelectPeriodStory.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
};
