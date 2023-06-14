import { Meta, StoryFn } from '@storybook/react';
import { Paragraph } from './paragraph';

export default {
  component: Paragraph,
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

export const ParagraphStory: StoryFn<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);
ParagraphStory.args = {
  children: 'Label',
  size: 'default',
  fontWeight: 'light',
  colorVariant: 'dark',
};

ParagraphStory.argTypes = {
  size: {
    control: { type: 'select' },
    options: [
      'giant',
      'extralarge',
      'large',
      'medium',
      'default',
      'small',
      'extrasmall',
      'tiny',
    ],
  },
  fontWeight: {
    control: { type: 'select' },
    options: ['hair', 'light', 'semihair', 'semibold'],
  },
  colorVariant: {
    control: { type: 'select' },
    options: ['red', 'purple', 'yellow', 'dark', 'light', 'error'],
  },
};
