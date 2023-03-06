import * as React from 'react';
import { describe, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import { NavBar } from './navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { navLinksJourneyHR, navLinksWebsite } from '../../navLinks';

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

  //  Teste de quantidade link de acordo com NavLinks
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
