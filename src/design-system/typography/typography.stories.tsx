import { Meta, Story } from '@storybook/react';
import { Title, Subtitle, Paragraphs } from './typography';
import { TitleProps, SubtitleProps, ParagraphsProps } from './types';

export default {
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
  },
} as Meta;

const TitleTemplate: Story<TitleProps> = (args) => {
  return <Title {...args} />;
};

export const TitleStory = TitleTemplate.bind({});
TitleStory.args = {
  children: 'Label',
  titleVariant: 'h1',
};

const SubtitleTemplate: Story<SubtitleProps> = (args) => {
  return <Subtitle {...args} />;
};

export const SubtitleStory = SubtitleTemplate.bind({});
SubtitleStory.args = {
  children: 'Label',
  subtitleVariant: 's1',
};

const ParagraphTemplate: Story<ParagraphsProps> = (args) => {
  return <Paragraphs {...args} />;
};

export const ParagraphStory = ParagraphTemplate.bind({});
ParagraphStory.args = {
  children: 'Label',
  sizeVariant: 'large',
  fontWeight: 'light',
};
