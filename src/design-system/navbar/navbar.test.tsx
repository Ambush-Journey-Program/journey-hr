import * as React from 'react';
import { describe, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import { NavBar } from './navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

type Link = {
  url: string;
  label: string;
  active: boolean;
};

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

const navLinksWebsite: Link[] = [
  {
    url: `/Why-us`,
    label: `Why us`,
    active: false,
  },
  {
    url: `/Compliant`,
    label: `Compliant`,
    active: false,
  },
  {
    url: `/Skill-&-Technology`,
    label: `Skill & Technology`,
    active: false,
  },
  {
    url: `/Careers`,
    label: `Careers`,
    active: false,
  },
];

describe('<NavBar />', () => {
  it('renders the Nav. Bar', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar navigationLinks={navLinksJourneyHR}></NavBar>
      </ThemeProvider>,
    );

    const NavBarEl = screen.getByTestId('NavBar');
    expect(NavBarEl).toBeInTheDocument();
  });

  it('renders the Nav. Bar with the avatar profile picture', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar navigationLinks={navLinksWebsite}></NavBar>
      </ThemeProvider>,
    );
    const avatarEl = screen.getByTestId('Avatar');
    expect(avatarEl).toBeInTheDocument();
  });

  it('renders the Nav. Bar and validate JourneyHR links quantity', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar navigationLinks={navLinksJourneyHR}></NavBar>
      </ThemeProvider>,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(5);
  });

  it('renders the Nav. Bar and validate website links quantity', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar navigationLinks={navLinksWebsite}></NavBar>
      </ThemeProvider>,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });
});
