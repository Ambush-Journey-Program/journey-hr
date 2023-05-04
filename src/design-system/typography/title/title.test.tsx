import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { TitleType } from './types';
import { Title } from './title';

const HEADINGS = [1, 2, 3, 4, 5, 6];

describe('<Title />', () => {
  it('renders the Title with a child string', () => {
    const label = 'Title';

    render(<Title variant="h1">{label}</Title>);

    const titleEl = screen.getByText(label);
    expect(titleEl).toBeInTheDocument();
  });

  it.each(HEADINGS)('render the tag H%s', (level) => {
    const label = 'Title';
    const heading = `h${level}` as TitleType;
    render(<Title variant={heading}>{label}</Title>);

    const titleEl = screen.getByRole('heading', { level });
    expect(titleEl).toBeInTheDocument();
  });
});
