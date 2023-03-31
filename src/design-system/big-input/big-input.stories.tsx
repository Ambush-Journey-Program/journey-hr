import { Meta, Story } from '@storybook/react';
import { BigInput } from './big-input';
import { IBigInputProps } from './types';

export default {
  component: BigInput,
  title: 'UI/Big Input',
  argTypes: {},
  parameters: {
    minLength: 50,
    spellCheck: true,
    required: true,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Big Input',
              url: 'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=9-31268&t=crxIvUD123577MuX-0',
              description:
                'This is the Figma of the Big Input and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<IBigInputProps> = (args) => {
  return <BigInput {...args} />;
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  error: false,
  minLength: 50,
  spellCheck: true,
};
