import { Meta, Story } from '@storybook/react';
import { AsideMenu } from './aside-menu';

export default {
  component: AsideMenu,
  title: 'Components/AsideMenu',
  parameters: {
    label: 'AsideMenu text',
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
  return <AsideMenu {...args} />;
};

export const AsideMenuStory = Template.bind({});
AsideMenuStory.args = {};
