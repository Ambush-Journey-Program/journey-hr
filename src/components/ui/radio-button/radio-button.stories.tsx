import { Meta, Story } from '@storybook/react';
import { mockLabel } from './const';
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
  optionsLabel: mockLabel,
};
