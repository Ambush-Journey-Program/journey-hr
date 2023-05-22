import { Meta, Story } from '@storybook/react';

import { Icon } from './icon';
import { IconProps } from './types';

export default {
  component: Icon,
  title: 'UI/Icon',
} as Meta;

const Template: Story<IconProps> = (args) => {
  return <Icon icon="ClockIcon" {...args} />;
};

export const IconStory = Template.bind({});
IconStory.args = {
  color: 'accepted',
  size: '58px',
};
