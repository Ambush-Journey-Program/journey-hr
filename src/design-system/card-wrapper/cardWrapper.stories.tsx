import { Meta, Story } from '@storybook/react';
import { CardWrapper } from './cardWrapper';
import { CardProps } from './types';

export default {
  component: CardWrapper,
  title: 'UI/CardWrapper',
  parameters: {
    children: 'Label',
  },
} as Meta;

const Template: Story<CardProps> = (args) => {
  return <CardWrapper {...args} />;
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  children:'Label'
};
