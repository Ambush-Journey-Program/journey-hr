import { Meta, Story } from '@storybook/react';

import { GuestListProps } from './types';

import { GuestList } from './guest-list';
import { GUESTS_LIST_DATA } from '../const';

export default {
  component: GuestList,
  title: 'Components/GuestList',
  parameters: {
    guestsList: list,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Guest-List',
              url: `https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=14-32493&t=fFoku2dhra99oAz4-0&fuid=1196819673068025271`,
              description: 'This is the Figma of Guest-List',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const GuestListTemplate: Story<GuestListProps> = (args) => {
  return <GuestList {...args} />;
};

export const GuestListStory = GuestListTemplate.bind({});
GuestListStory.args = {
  guestsList: GUESTS_LIST_DATA,
};
