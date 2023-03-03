import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { NavBar } from './navbar';
import { NavBarProps } from './type';
import { navLinksJourneyHR, navLinksWebsite } from '../../navLinks';

export default {
  component: NavBar,
  title: 'UI/Navbar',
  parameters: {},
} as Meta;

const Template: Story<NavBarProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar {...args} />
    </ThemeProvider>
  );
};

export const NavBarStory = Template.bind({});
NavBarStory.args = {
  avatarSize: 'small',
  navigationLinks: navLinksJourneyHR,
};
