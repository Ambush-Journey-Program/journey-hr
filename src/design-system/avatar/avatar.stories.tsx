import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Avatar } from './avatar';
import { AvatarProps } from './types';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  parameters: {
    src: 'src/design-system/avatar/User-Photo.png',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'User Avatar ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A695&t=i4ddngmKFF26EqjW-1',
              description: 'This is the Figma of the Avatar Component',
            },
          ],
        },
      ],
    },
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
  src: '/static/images/UserPhoto.png',
  sizeVariant: 'small',
};
