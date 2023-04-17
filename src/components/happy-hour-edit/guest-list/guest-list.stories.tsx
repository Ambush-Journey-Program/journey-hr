import { Meta, Story } from '@storybook/react';

import { GuestListProps, Guests } from './types';

import { GuestList } from './guest-list';

const list: Guests[] = [
  { guest: { id: '1', name: 'Mariana Maia', team: 'Design' } },
  { guest: { id: '2', name: 'Marcello Aragoni', team: 'Developer' } },
  { guest: { id: '3', name: 'Lucas Medeiros', team: 'Developer' } },
  { guest: { id: '4', name: 'Claudia da Silva', team: 'Design' } },
];

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
              url:
                'https://www.figma.com/file/MRpGlW5tom04XStEIw5th9/HH-Sort?node-id=14-32493&t=fFoku2dhra99oAz4-0&fuid=1196819673068025271',
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
  guestsList: list,
};
