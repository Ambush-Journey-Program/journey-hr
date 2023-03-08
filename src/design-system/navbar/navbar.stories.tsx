import { Meta, Story } from '@storybook/react';
import { NavBar } from './navbar';
import { NavBarProps } from './type';
import { Link } from './type';

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
  parameters: {},
} as Meta;

const Template: Story<NavBarProps> = (args) => {
  return <NavBar {...args} />;
};

export const NavBarStory = Template.bind({});
NavBarStory.args = {
  navigationLinks: navLinksJourneyHR,
};
