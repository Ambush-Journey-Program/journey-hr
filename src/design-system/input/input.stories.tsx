import { Meta, Story } from '@storybook/react';
import { Input } from './input';
import { IInputProps } from './types';

export default {
  component: Input,
  title: 'UI/Input',
  argTypes: {},
  parameters: {
    label: 'Label',
    required: true,
    disabled: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Input',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=3%3A32&t=pApxUetlxSBLJr2G-0',
              description: 'This is the Figma of the Input and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<IInputProps> = (args) => {
  return <Input {...args} />;
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'text',
  right: false,
  error: '',
};

export const SelectInputStory2 = Template.bind({});
SelectInputStory.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'text',
  right: false,
  error: 'error',
};
