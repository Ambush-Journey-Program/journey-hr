import { Meta, Story } from '@storybook/react';
import { CardWrapper } from './cardWrapper';
import { CardProps } from './types';

export default {
  component: CardWrapper,
  title: 'UI/CardWrapper',
  parameters: {
    children: 'Label',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Card Wrapper ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A595&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Card Wrapper and its variations. It used the Navbar Figma as reference',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => {
  return <CardWrapper {...args} />;
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  children: 'Label',
};
