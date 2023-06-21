import { Meta, StoryFn } from '@storybook/react';
import { Avatar } from './avatar';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'User Avatar',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A695&t=i4ddngmKFF26EqjW-1',
              description: 'This is the Figma of the Avatar Component',
            },
          ],
        },
      ],
    },
  },
} satisfies Meta;

export const SelectCardStory: StoryFn<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

SelectCardStory.args = {
  src: '/static/images/UserPhoto.png',
  sizeVariant: 'small',
};

SelectCardStory.argTypes = {
  sizeVariant: {
    control: { type: 'radio' },
    options: ['small', 'large'],
  },
};
