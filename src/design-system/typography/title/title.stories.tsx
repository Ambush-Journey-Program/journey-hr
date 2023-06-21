import { Meta, StoryFn } from '@storybook/react';
import { Title } from './title';

export default {
  component: Title,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
  },
} as Meta;

export const TitleStory: StoryFn<typeof Title> = (args) => <Title {...args} />;
TitleStory.args = {
  children: 'Label',
  variant: 'h1',
};

TitleStory.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  },
};
