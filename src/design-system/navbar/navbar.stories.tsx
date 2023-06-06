import { Meta, Story, StoryFn } from '@storybook/react';
import { NavBar } from './navbar';
import { NavBarProps, Link } from './type';

const navLinksJourneyHR: Link[] = [
  {
    url: `/Interviews`,
    label: `Interviews`,
    active: false,
  },
  {
    url: `/Happy-Hour`,
    label: `Happy Hour`,
    active: false,
  },
  {
    url: `/Feedbacks`,
    label: `Feedbacks`,
    active: false,
  },
  {
    url: `/Send-a-invite`,
    label: `Send a Invite`,
    active: false,
  },
  {
    url: `/Shorty`,
    label: `Shorty`,
    active: false,
  },
];

export default {
  component: NavBar,
  title: 'UI/Navbar',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Navbar',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A595&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Navbar and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

export const NavBarStory: StoryFn<typeof NavBar> = (
  args: JSX.IntrinsicAttributes & NavBarProps,
) => <NavBar {...args} />;

NavBarStory.args = {
  navigationLinks: navLinksJourneyHR,
  colors: 'dark',
};

NavBarStory.argTypes = {
  colors: {
    control: { type: 'radio' },
    options: ['light', 'dark'],
  },
};
