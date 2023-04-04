import { Meta, Story } from '@storybook/react';
import { PageHeader } from './page-header';
import { PageHeaderProps } from './types';

export default {
  component: PageHeader,
  title: 'Components/PageHeader',
  parameters: {
    label: 'PageHeader text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Page Header',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description:
                'This is the Figma of the Page Header and its variations. It used the Navbar Figma as reference',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<PageHeaderProps> = (args) => {
  return <PageHeader {...args} />;
};

export const PageHeaderStory = Template.bind({});
PageHeaderStory.args = {
  title: 'Happy Hour Schedule',
  subtitle: 'Choose the best dates to celebrate',
};
