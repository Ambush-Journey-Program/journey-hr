import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Avatar } from './avatar';
import { AvatarProps } from './types';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  parameters: {
    src: 'src/design-system/avatar/User-Photo.png',
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Avatar {...args} />
    </ThemeProvider>
  );
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  src: 'src/design-system/avatar/User-Photo.png',
};
