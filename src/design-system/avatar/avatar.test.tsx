import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Avatar } from './avatar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Avatar />', () => {
  it('renders the Avatar', () => {
    render(
      <ThemeProvider theme={theme}>
        <Avatar src="none" />
      </ThemeProvider>,
    );

    const avatarEl = screen.getByTestId('Avatar');
    expect(avatarEl).toBeInTheDocument();
  });
});
