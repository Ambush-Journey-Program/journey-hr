import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Paragraph } from './paragraph';

describe('<Paragraph />', () => {
  it('renders the Paragraph with a child string', () => {
    const label = 'Paragraph';

    render(
      <Paragraph size="large" fontWeight="light" colorVariant="dark">
        {label}
      </Paragraph>,
    );

    const paragraphEl = screen.getByText(label);
    expect(paragraphEl).toBeInTheDocument();
  });
});
