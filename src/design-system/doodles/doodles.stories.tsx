import { Meta, Story } from '@storybook/react';

import { Doodles } from './doodles';
import { IDoodlesProps } from './types';

export default {
  component: Doodles,
  title: 'UI/Doodles',
  parameters: {
    isLoading: false,
    label: 'Doodles text',
  },
} as Meta;

const Template: Story<IDoodlesProps> = (args) => {
  return <Doodles {...args} />;
};

export const DoodlesStory = Template.bind({});
DoodlesStory.args = {
  colors: 'dark',
};
