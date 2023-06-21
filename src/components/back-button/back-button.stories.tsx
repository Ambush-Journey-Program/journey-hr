import { Meta, Story } from '@storybook/react';
import { BackButton } from '.';
import { BackButtonProps } from './types';

export default {
  component: BackButton,
  title: 'Components/BackButton',
  parameters: {
    onClick: () => {},
    disabled: false,
  },
} satisfies Meta;

const Template: Story<BackButtonProps> = (args) => {
  return <BackButton {...args} />;
};

export const BackButtonStory = Template.bind({});
BackButtonStory.args = {
  disabled: false,
};
