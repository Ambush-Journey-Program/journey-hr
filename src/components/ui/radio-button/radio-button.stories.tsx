import { Meta, Story } from '@storybook/react';
import { mockLabel } from './const';

import { RadioButton } from './radio-button';
import { RadioButtonProps } from './types';

export default {
  component: RadioButton,
  title: 'UI/RadioButton',
  parameters: {
    isLoading: false,
    label: 'RadioButton text',
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
  return <RadioButton {...args} />;
};

export const RadioButtonStory = Template.bind({});
RadioButtonStory.args = {
  optionsLabel: mockLabel,
  // fontWeight?: 'semibold' | 'hair';
  // disabled?: boolean;
};
