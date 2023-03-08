import * as React from 'react';
import { describe, expect } from 'vitest';
import { theme } from '../../styles/theme';

import { render, screen } from '../../tests/renderWithProviders';

import CardWrapper from './cardWrapper';

import { render, screen } from '../../tests/renderWithProviders';
import CardWrapper from './cardWrapper';

describe('<CardWrapper />', () => {
  it('renders the CardWrapper with a child string', () => {
    const label = 'My CardWrapper';

    render(<CardWrapper>{label}</CardWrapper>);

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });

  it('renders the CardWrapper with a JSX child', () => {
    const label = 'My CardWrapper';

    render(
      <CardWrapper>
        <div>
          <h1>{label}</h1>
        </div>
      </CardWrapper>,
    );

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });
});
