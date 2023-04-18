import { type Meta, type Story } from '@storybook/react';
import { Paragraphs } from './paragraphs';
import { type ParagraphsProps } from './types';

export default {
  component: Paragraphs,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Typography',
              url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=58%3A29259&t=WcI5jns5q5TpQbxH-1',
              description:
                'This is the Figma of the Typography and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const ParagraphTemplate: Story<ParagraphsProps> = (args) => {
  return <Paragraphs {...args} />;
};

export const ParagraphStory = ParagraphTemplate.bind({});
ParagraphStory.args = {
  children: 'Label',
  size: 'large',
  fontWeight: 'light',
};
