import { Meta, Story } from '@storybook/react';
import { Input } from './input';
import { InputProps } from './types';
import * as HeroIcons from '@heroicons/react/24/solid';

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
} satisfies Meta;

const Template: Story<InputProps> = (args) => {
  return <Input {...args} />;
};

export const InputWithOnlyHelpers = Template.bind({});
InputWithOnlyHelpers.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'text',
  right: false,
  error: '',
  hasIconRight: true,
};

export const InputWithIcons = Template.bind({});
InputWithIcons.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'search',
  right: false,
  error: '',
  iconLeft: 'UserIcon',
  hasIconRight: true,
  iconRight: 'MagnifyingGlassIcon',
};
InputWithIcons.argTypes = {
  iconLeft: {
    options: Object.keys(HeroIcons),
    control: {
      type: 'select',
    },
  },
  iconRight: {
    options: Object.keys(HeroIcons),
    control: {
      type: 'select',
    },
  },
};

export const InputWithLeftIconOnly = Template.bind({});
InputWithLeftIconOnly.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'date',
  right: false,
  error: '',
  iconLeft: 'CalendarIcon',
  hasIconRight: true,
};
InputWithLeftIconOnly.argTypes = {
  iconLeft: {
    options: Object.keys(HeroIcons),
    control: {
      type: 'select',
    },
  },
};

export const InputWithRightIconOnly = Template.bind({});
InputWithRightIconOnly.args = {
  label: 'Label',
  required: true,
  disabled: false,
  readOnly: false,
  type: 'search',
  right: false,
  error: '',
  hasIconRight: true,
  iconRight: 'MagnifyingGlassIcon',
};
InputWithRightIconOnly.argTypes = {
  iconRight: {
    options: Object.keys(HeroIcons),
    control: {
      type: 'select',
    },
  },
};
