import { type Meta, type Story } from '@storybook/react';
import { Title } from './title';
import { type TitleProps } from './types';

export default {
  component: Title,
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
  variant: 'h1',
};
