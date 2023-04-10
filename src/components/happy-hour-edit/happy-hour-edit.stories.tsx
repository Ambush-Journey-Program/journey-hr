import { Meta, Story } from '@storybook/react';

import { HappyHourEdit } from './happy-hour-edit';
import { HappyHourEditProps } from './types';

export default {
  component: HappyHourEdit,
  title: 'Components/HappyHourEdit',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<HappyHourEditProps> = (args) => {
  return <HappyHourEdit {...args} />;
};

export const HappyHourEditStory = Template.bind({});
