import { Meta, StoryFn } from '@storybook/react';
import { Subtitle } from './subtitle';

export default {
  component: Subtitle,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
  },
} as Meta;

export const SubtitleStory: StoryFn<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);
SubtitleStory.args = {
  children: 'Label',
  variant: 's1',
  fontWeight: 'regular',
};

SubtitleStory.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['s1', 's2', 's3', 's4', 's5', 's6'],
  },
  fontWeight: {
    control: { type: 'radio' },
    options: ['hair', 'regular', 'medium'],
  },
};
