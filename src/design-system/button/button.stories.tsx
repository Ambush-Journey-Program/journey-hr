import { Meta, Story } from '@storybook/react';
import { Button } from './button';
import { IButtonProps } from './types';

export default {
  component: Button,
  title: 'UI/Button',
  argTypes: {
    color: {
      control: 'radio',

      options: ['defaultColor', 'blue', 'purple'],
      if: { arg: 'variant', neq: 'ghost' },
    },
  },
  parameters: {
    isLoading: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Buttons ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1039%3A469&t=i4ddngmKFF26EqjW-1',
              description: 'This is the Figma of the Button and its variations',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  return <Button {...args} />;
};

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Button',
  disabled: false,
  color: 'defaultColor',
  sizeVariant: 'default',
  variant: 'defaultType',
};
