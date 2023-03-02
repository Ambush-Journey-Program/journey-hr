import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Tooltip } from './tooltip';

import { ITooltipProps } from './types';

export default {
  component: Tooltip,
  title: 'UI/Tooltip',
  parameters: {
    children: 'Test',
    position: '',
    text: 'Copied!',
  },
} as Meta;

const Template: Story<ITooltipProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip {...args} />
    </ThemeProvider>
  );
};

export const TooltipStory = Template.bind({});

TooltipStory.args = {
  children: 'Test',
  position: 'top',
  text: 'Copied!',
};
