import { type Meta, type Story } from '@storybook/react';

import { BackButton } from '.';
import { type IBackButtonProps } from './types';

export default {
  component: BackButton,
  title: 'UI/BackButton',
  parameters: {
    onClick: () => {},
    disabled: false,
  },
} as Meta;

const Template: Story<IBackButtonProps> = (args) => {
  return <BackButton {...args} />;
};

export const BackButtonStory = Template.bind({});
BackButtonStory.args = {
  disabled: false,
};
