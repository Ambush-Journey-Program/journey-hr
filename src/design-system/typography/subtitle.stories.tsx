import { Meta, Story } from '@storybook/react';
import { Subtitle } from './typography';
import { SubtitleProps } from './types';

export default {
  component: Subtitle,
  title: 'UI/Typography',
  parameters: {
    children: 'Label',
  },
} as Meta;

const SubtitleTemplate: Story<SubtitleProps> = (args) => {
  return <Subtitle {...args} />;
};

export const SubtitleStory = SubtitleTemplate.bind({});
SubtitleStory.args = {
  children: 'Label',
  variant: 's1',
};
