import { Meta, Story, StoryFn } from '@storybook/react';
import * as HeroIcons from '@heroicons/react/24/solid';
import { Icon } from './icon';
import { IconProps, IconColors } from './types';
import { theme } from '@/styles/theme';

const iconColor: IconColors = {
  ...theme.color.button,
  ...theme.color.auxiliary,
  ...theme.color.contrasts,
  ...theme.color.auxiliary,
  ...theme.color.brandColors,
};

export default {
  component: Icon,
  title: 'UI/Icon',
} as Meta;

export const IconStory: StoryFn<typeof Icon> = (
  args: JSX.IntrinsicAttributes & IconProps,
) => <Icon {...args} />;

IconStory.args = {
  color: 'accepted',
  size: '58px',
  icon: 'HeartIcon',
};

IconStory.argTypes = {
  color: {
    control: { type: 'select' },
    options: Object.keys(iconColor),
  },

  icon: {
    options: Object.keys(HeroIcons),
    control: {
      type: 'select',
    },
  },
  size: {
    control: { type: 'radio' },
    options: ['16px', '18px', '20px', '58px'],
  },
};
