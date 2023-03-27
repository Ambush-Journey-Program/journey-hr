import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Logo } from './logo';
import { ILogoProps } from './types';

export default {
  component: Logo,
  title: 'UI/Logo',
  parameters: {},
} as Meta;

const Template: Story<ILogoProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Logo {...args} />
    </ThemeProvider>
  );
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  variant: 'horizontal',
  colorVariant: 'dark',
};
