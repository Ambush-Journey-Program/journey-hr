import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '../../tests/renderWithProviders';
import { TitleType } from './types';
import { Title, Subtitle, Paragraphs } from './typography';

const HEADINGS = [1, 2, 3, 4, 5, 6];

describe('<Title />', () => {
  it('renders the Title with a child string', () => {
    const label = 'Title';

    render(<Title variant="h1">{label}</Title>);

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });

  it.each(HEADINGS)('render the tag H%s', (level) => {
    const label = 'Title';
    const heading = `h${level}` as TitleType;
    render(<Title variant={heading}>{label}</Title>);

    const wrapperEl = screen.getByRole('heading', { level });
    expect(wrapperEl).toBeInTheDocument();
  });
});

describe('<Subtitle />', () => {
  it('renders the Subtitle with a child string', () => {
    const label = 'Subtitle';

    render(<Subtitle variant="s1">{label}</Subtitle>);

    const wrapperEl = screen.getByText(label);
    expect(wrapperEl).toBeInTheDocument();
  });
});

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
