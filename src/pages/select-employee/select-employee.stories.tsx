import { Meta, Story } from '@storybook/react';

import { SelectEmployee } from './select-employee';
import { SelectEmployeeProps } from './types';

export default {
  component: SelectEmployee,
  title: 'Pages/SelectEmployee',
  parameters: {
    isLoading: false,
    label: 'SelectEmployee text',
  },
} as Meta;

const Template: Story<SelectEmployeeProps> = (args) => {
  return <SelectEmployee {...args} />;
};

export const SelectEmployeeStory = Template.bind({});
