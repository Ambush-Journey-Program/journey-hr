import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Subtitle } from './subtitle';

describe('<Subtitle />', () => {
  it('renders the Subtitle with a child string', () => {
    const label = 'Subtitle';

    render(
      <Subtitle variant="s1" fontWeight="medium">
        {label}
      </Subtitle>,
    );

    const subtitleEl = screen.getByText(label);
    expect(subtitleEl).toBeInTheDocument();
  });
});
