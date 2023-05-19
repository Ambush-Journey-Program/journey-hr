import { Meta, Story } from '@storybook/react';
import { PageMenu } from './page-menu';

export default {
  component: PageMenu,
  title: 'Components/PageMenu',
  parameters: {
    label: 'PageMenu text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Page Menu',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description:
                'This is the Figma of the Page Menu and its variations. It used the Navbar Figma as reference',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story = (args) => {
  return <PageMenu {...args} />;
};

export const PageMenuStory = Template.bind({});
PageMenuStory.args = {};
