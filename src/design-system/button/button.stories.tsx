import { Meta, Story, StoryFn } from '@storybook/react';
import { Button } from './button';
import { ButtonProps } from './types';
import * as HeroIcons from '@heroicons/react/24/solid';

export default {
  component: Button,
  title: 'UI/Button',
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

// const Template: Story<ButtonProps> = (args) => {
//   return <Button {...args} />;
// };

export const ButtonStory: StoryFn<typeof Button> = (
  args: JSX.IntrinsicAttributes & ButtonProps,
) => <Button {...args} />;

// export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Button',
  disabled: false,
  color: 'secondary',
  sizeVariant: 'medium',
  variant: 'default',
};

export const IconButtonStory: StoryFn<typeof Button> = (args) => (
  <Button {...args} />
);

IconButtonStory.args = {
  disabled: false,
  color: 'primary',
  sizeVariant: 'medium',
  variant: 'default',
  icon: 'AcademicCapIcon',
};

ButtonStory.argTypes = {
  color: {
    control: { type: 'radio' },
    options: ['primary', 'secondary', 'alternative'],
  },
  variant: {
    control: { type: 'radio' },
    options: ['default', 'outlined', 'ghost'],
  },
  sizeVariant: {
    control: { type: 'radio' },
    options: ['small', 'medium', 'large'],
  },
};

IconButtonStory.argTypes = {
  color: {
    control: { type: 'radio' },
    options: ['primary', 'secondary', 'alternative'],
  },
  variant: {
    control: { type: 'radio' },
    options: ['default', 'outlined', 'ghost'],
  },
  sizeVariant: {
    control: { type: 'radio' },
    options: ['small', 'medium', 'large'],
  },
  icon: {
    options: Object.keys(HeroIcons),
    control: {
      type: 'select',
    },
  },
};
