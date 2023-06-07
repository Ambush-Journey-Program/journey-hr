import { Meta, StoryFn } from '@storybook/react';
import { Label } from './label';

export default {
  component: Label,
  title: 'UI/Label',
} as Meta;

export const LabelStory: StoryFn<typeof Label> = (args) => (
  <Label {...args} />
);

LabelStory.args = {
  label: 'Test',
  required: false,
};

