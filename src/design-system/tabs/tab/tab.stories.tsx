import { Meta, Story } from '@storybook/react';

import { Tab } from './tab';
import { TabProps } from './types';

export default {
  component: Tab,
  title: 'UI/Tab',
  parameters: {},
} as Meta;

const Template: Story<TabProps> = (args) => {
  return <Tab {...args} />;
};

export const TabStory = Template.bind({});
TabStory.args = {
  label: 'Label',
};
