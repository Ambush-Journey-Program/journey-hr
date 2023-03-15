import { Meta, Story } from '@storybook/react';
import { Label } from '../input/input.styled';

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
};
