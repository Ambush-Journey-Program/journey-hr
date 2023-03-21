import { Meta, Story } from '@storybook/react';
import { Paragraphs } from './typography';
import { ParagraphsProps } from './types';

export default {
  component: Paragraphs,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
  },
} as Meta;

const ParagraphTemplate: Story<ParagraphsProps> = (args) => {
  return <Paragraphs {...args} />;
};

export const ParagraphStory = ParagraphTemplate.bind({});
ParagraphStory.args = {
  children: 'Label',
  size: 'large',
  fontWeight: 'light',
};
