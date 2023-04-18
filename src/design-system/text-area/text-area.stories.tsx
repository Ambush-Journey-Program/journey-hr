import { type Meta, type Story } from '@storybook/react';
import { TextArea } from './text-area';
import { type TextAreaProps } from './types';

export default {
  component: TextArea,
  title: 'UI/Text Area',
  argTypes: {},
  parameters: {
    minLength: 10,
    rows: 3,
    spellCheck: true,
    required: true,
    touched: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Text Area',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=9-31268&t=crxIvUD123577MuX-0',
              description:
                'This is the Figma of the Text Area and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => {
  return <TextArea {...args} />;
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  minLength: 10,
  spellCheck: true,
  rows: 3,
  touched: false,
  label: 'Description',
};
