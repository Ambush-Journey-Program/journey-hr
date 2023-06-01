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

export const SelectInputWithIcons = Template.bind({});
SelectInputWithIcons.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'search',
  right: false,
  error: '',
  iconLeft: 'UserIcon',
  hasIconRight:true,
  iconRight: 'MagnifyingGlassIcon',
};

export const SelectInputWithLeftIconOnly = Template.bind({});
SelectInputWithLeftIconOnly.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'date',
  right: false,
  error: '',
  iconLeft: 'CalendarIcon',
  hasIconRight:true,
};

export const SelectInputWithRightIconOnly = Template.bind({});
SelectInputWithRightIconOnly.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'text',
  right: false,
  error: '',
  hasIconRight: true,
  iconRight: 'MagnifyingGlassIcon',
};
