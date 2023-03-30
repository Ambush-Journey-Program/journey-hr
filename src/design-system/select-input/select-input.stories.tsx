import { Meta, Story } from '@storybook/react';
import { SelectInput } from './select-input';
import { ISelectInputProps } from './types';

const exampleOptions = [
  {
    label: 'Text 1',
    value: '1',
  },
  {
    label: 'Text 2',
    value: '2',
  },
  {
    label: 'Text 3',
    value: '3',
  },
];

export default {
  component: SelectInput,
  title: 'UI/SelectInput',
  argTypes: {
    onSelect: { action: 'selected' },
  },
  parameters: {
    title: 'Title',
    required: true,
    options: exampleOptions,
    disabled: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Select Input',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=3%3A32&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Select Input and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<ISelectInputProps> = (args) => {
  return <SelectInput {...args} />;
};

export const SelectInputStory = Template.bind({});
SelectInputStory.args = {
  title: 'Title',
  required: true,
  options: exampleOptions,
  disabled: false,
  placeholder: 'Label',
};
