/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta, Story } from '@storybook/react';
import { Summary } from './summary';
import { SummaryProps } from './types';

export default {
  component: Summary,
  title: 'Components/Summary',
  parameters: {
    label: 'Summary',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Summary',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=19%3A34538&t=G5nrEvXtJ4BbktR5-1',
              description: 'This is the Figma of the Summary.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<SummaryProps> = (args) => {
  return <Summary {...args} />;
};

export const SummaryStory = Template.bind({});
SummaryStory.args = {
  title: 'Happy Hour Schedule',
  subtitle: 'Choose the best dates to celebrate',
};
