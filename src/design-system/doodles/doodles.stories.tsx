import { type Meta, type Story } from '@storybook/react';

import { Doodles } from './doodles';
import { type IDoodlesProps } from './types';

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

const Template: Story<IDoodlesProps> = (args) => {
  return <Doodles {...args} />;
};

export const DoodlesStory = Template.bind({});
DoodlesStory.args = {
  colors: 'dark',
};
