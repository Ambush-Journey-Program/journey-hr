import { Meta, Story } from '@storybook/react';
import { RadioButton } from './radio-button';
import { RadioButtonProps } from './types';

export default {
  component: RadioButton,
  title: 'UI/RadioButton',
  parameters: {},
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
  return <RadioButton {...args} />;
};

export const RadioButtonStory = Template.bind({});
RadioButtonStory.args = {
  optionDefault: 'Large',
  option2: 'Medium',
  fontWeight: 'hair',
  disabled: false,
};
