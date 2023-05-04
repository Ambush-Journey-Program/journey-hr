import { Meta, Story } from '@storybook/react';
import { SelectEmployee } from './select-employee';
import { SelectEmployeeProps } from './types';

export default {
  component: SelectEmployee,
  title: 'Pages/SelectEmployee',
} as Meta;

const Template: Story<SelectEmployeeProps> = (args) => {
  return <SelectEmployee />;
};

export const SelectEmployeeStory = Template.bind({});
