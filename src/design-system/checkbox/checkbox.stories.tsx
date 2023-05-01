import { Meta, Story } from '@storybook/react';

import { CheckBox } from './checkbox';
import { CheckboxProps } from './types';

export default {
  component: CheckBox,
  title: 'UI/Checkbox',
  parameters: {
    isLoading: false,
    label: 'Checkbox text',
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  return <CheckBox {...args} />;
};

export const CheckboxStory = Template.bind({});
CheckboxStory.args = {
  disabled: false,
  isChecked: false,
  label: 'Label',
  description: 'Description',
  labelFontWeight: 'light',
};
