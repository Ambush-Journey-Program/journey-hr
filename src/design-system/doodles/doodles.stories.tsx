import { Meta, Story, StoryFn } from '@storybook/react';

import { Doodles } from './doodles';
import { DoodlesStyleProps, IDoodlesProps } from './types';
import { DoodlesLib } from './svgLibrary';

export default {
  component: Doodles,
  title: 'UI/Doodles',
  parameters: {
    isLoading: false,
    label: 'Doodles text',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Doodles',
              url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=6%3A69&t=WcI5jns5q5TpQbxH-1',
              description:
                'This is the Figma of the Doodles and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

export const DoodlesStory: StoryFn<typeof Doodles> = (args) => (
  <Doodles {...args} />
);
DoodlesStory.args = {
  colors: 'dark',
  icon: 'arrow2',
};

DoodlesStory.argTypes = {
  colors: {
    control: { type: 'radio' },
    options: ['red', 'purple', 'yellow', 'light'],
  },

  icon: {
    options: Object.keys(DoodlesLib),
    control: {
      type: 'select',
    },
  },
};
