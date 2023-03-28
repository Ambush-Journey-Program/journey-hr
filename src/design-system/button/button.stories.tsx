import { Meta, Story } from '@storybook/react';
import { Button } from './button';
import { IButtonProps } from './types';

export default {
  component: Button,
  title: 'UI/Button',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  return <Button {...args} />;
};

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Button',
  disabled: false,
  color: 'defaultColor',
  sizeVariant: 'default',
  variant: 'defaultType',
};
