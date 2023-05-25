import { Meta, Story } from '@storybook/react';
import { Paragraph } from './paragraph';
import { ParagraphProps } from './types';

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

const ParagraphTemplate: Story<ParagraphProps> = (args) => {
  return <Paragraph {...args} />;
};

export const Paragraphtory = ParagraphTemplate.bind({});
Paragraphtory.args = {
  children: 'Label',
  size: 'large',
  fontWeight: 'light',
};
