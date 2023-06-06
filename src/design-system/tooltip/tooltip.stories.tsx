import { Meta, Story, StoryFn } from '@storybook/react';
import { Tooltip } from './tooltip';

export default {
  component: Tooltip,
  title: 'UI/Tooltip',
  parameters: {
    children: 'Teste',
    position: '',
    text: 'Copied!',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Tooltip',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=48%3A71&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Tooltip and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

export const TooltipStory: StoryFn<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

TooltipStory.args = {
  children: 'Test',
  variantPosition: 'top',
  text: 'Copied!',
};

TooltipStory.argTypes = {
  variantPosition: {
    control: { type: 'radio' },
    options: ['right', 'top', 'bottom', 'left'],
  },
};
