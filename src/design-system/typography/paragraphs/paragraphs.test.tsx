import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '../../../tests/renderWithProviders';
import { Paragraphs } from './paragraphs';

describe('<Paragraphs />', () => {
  it('renders the Paragraphs with a child string', () => {
    const label = 'Paragraphs';

    render(
      <Paragraphs size="large" fontWeight="light" colorVariant="dark">
        {label}
      </Paragraphs>,
    );

    const paragraphsEl = screen.getByText(label);
    expect(paragraphsEl).toBeInTheDocument();
  });
});
