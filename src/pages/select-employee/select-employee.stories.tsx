import { Meta, Story } from '@storybook/react';
import { SelectEmployee } from './select-employee';
import { SelectEmployeeProps } from './types';
import { employees } from './mocking';

export default {
  component: SelectEmployee,
  title: 'Pages/SelectEmployee',
} as Meta;

const Template: Story<SelectEmployeeProps> = (args) => {
  return <SelectEmployee employees={employees} currentUser="Daniela Petry" />;
};

export const SelectEmployeeStory = Template.bind({});
SelectEmployeeStory.args = {};
