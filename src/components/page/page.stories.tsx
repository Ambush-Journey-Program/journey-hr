import { Meta, Story } from '@storybook/react';

import { Page } from './page';
import { PageProps } from './types';

export default {
  component: Page,
  title: 'Component/Page',
  parameters: {
    isLoading: false,
  },
} as Meta;

const Template: Story<PageProps> = (args) => {
  return <Page {...args} />;
};

export const PageStory = Template.bind({});
