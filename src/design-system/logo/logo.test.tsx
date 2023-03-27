import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from './logo';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Logo />', () => {
  it('renders the Logo', () => {
    render(
      <ThemeProvider theme={theme}>
        <Logo variant={'symbol'} colorVariant={'red'} />
      </ThemeProvider>,
    );

    const avatarEl = screen.getByTestId('Logo');
    expect(avatarEl).toBeInTheDocument();
  });
});
