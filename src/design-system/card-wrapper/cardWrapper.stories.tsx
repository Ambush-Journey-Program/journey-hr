import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import CardWrapper, { CardProps } from './cardWrapper';

export default {
  component: CardWrapper,
  title: 'UI/CardWrapper',
  parameters: {
    children: 'Label',
  },
} as Meta;

const Template: Story<CardProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <CardWrapper {...args} />
    </ThemeProvider>
  );
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  children: 'Label',
};
