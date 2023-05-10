import { Meta, Story } from '@storybook/react';

import { SegmentedControl } from './segmented-control';
import { SegmentedControlProps } from './types';

export default {
  component: SegmentedControl,
  title: 'UI/SegmentedControl',
  parameters: {},
} as Meta;

const Template: Story<SegmentedControlProps> = (args) => {
  return <SegmentedControl {...args} />;
};

export const SegmentedControlStory = Template.bind({});
SegmentedControlStory.args = {
  label: 'Label',
};
