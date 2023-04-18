import { type Meta, type Story } from '@storybook/react';
import { Badge } from './badge';
import { type IBadgeProps } from './types';

export default {
  component: Badge,
  title: 'UI/Badge',
  parameters: {
    isLoading: false,
    label: 'Badge text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Badge',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description:
                'This is the Figma of the Badge and its variations. It used the Navbar Figma as reference',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<IBadgeProps> = (args) => {
  return <Badge {...args} />;
};

export const BadgeStory = Template.bind({});
BadgeStory.args = {
  text: 'Dev Team',
};
