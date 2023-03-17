import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '../../tests/renderWithProviders';
import { Title, Subtitle, Paragraphs } from './typography';

describe('<Title />', () => {
  it('renders the Title with a child string', () => {
    const label = 'Title';

    render(<Title titleVariant="h1">{label}</Title>);

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });
});

describe('<Subtitle />', () => {
  it('renders the Subtitle with a child string', () => {
    const label = 'Subtitle';

    render(<Subtitle subtitleVariant="s1">{label}</Subtitle>);

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });
});

describe('<Paragraphs />', () => {
  it('renders the Paragraphs with a child string', () => {
    const label = 'Paragraphs';

    render(
      <Paragraphs sizeVariant="large" fontWeight="light">
        {label}
      </Paragraphs>,
    );

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });
});
