/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta, Story } from '@storybook/react';
import { Footer } from './footer';
import { FooterProps } from './types';

export default {
  component: Footer,
  title: 'Components/Footer',
  parameters: {
    label: 'Footer',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Footer',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description: 'This is the Figma of the Footer and its variations',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />;
};

export const FooterStory = Template.bind({});
FooterStory.args = {};
