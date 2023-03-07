import * as React from 'react';
import { describe, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import { CardWrapper } from './cardWrapper';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<CardWrapper />', () => {
  it('renders the CardWrapper with a child string', () => {
    const label = 'My CardWrapper';

    render(
      <ThemeProvider theme={theme}>
        <CardWrapper>{label}</CardWrapper>
      </ThemeProvider>,
    );

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });

  it('renders the CardWrapper with a JSX child', () => {
    const label = 'My CardWrapper';

    render(
      <ThemeProvider theme={theme}>
        <CardWrapper>
          <div>
            <h1>{label}</h1>
          </div>
        </CardWrapper>
      </ThemeProvider>,
    );

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });
});
