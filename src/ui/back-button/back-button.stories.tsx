import { Meta, Story } from '@storybook/react';

import { BackButton } from './back-button';
import { IBackButtonProps } from './types';

export default {
  component: BackButton,
  title: 'UI/BackButton',
  parameters: {},
} as Meta;

const Template: Story<IBackButtonProps> = (args) => {
  return <BackButton {...args} />;
};

export const BackButtonStory = Template.bind({});
BackButtonStory.args = {
  disabled: false,
  children: 'Back',
};
