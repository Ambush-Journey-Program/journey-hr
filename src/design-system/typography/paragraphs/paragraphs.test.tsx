import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '../../../tests/renderWithProviders';
import { Paragraphs } from './paragraphs';

describe('<Paragraphs />', () => {
  it('renders the Paragraphs with a child string', () => {
    const label = 'Paragraphs';

    render(
      <Paragraphs size="large" fontWeight="light">
        {label}
      </Paragraphs>,
    );

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });
});
