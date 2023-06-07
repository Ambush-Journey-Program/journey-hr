import { Meta, Story } from '@storybook/react';

import { Layout} from './layout';
import { LayoutProps } from './types';

export default {
  component: Layout,
  title: 'Component/Layout',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<LayoutProps> = (args) => {
  return <Layout {...args} />;
};

export const LayoutStory = Template.bind({});
