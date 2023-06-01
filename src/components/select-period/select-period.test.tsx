import * as React from 'react';
import { SelectPeriod } from '.';
import { render, screen } from '@/tests/renderWithProviders';

describe('<SelectPeriod />', () => {
  it('renders the Label', () => {
    render(<SelectPeriod />);
    const inputEl = screen.getByText('Start Date');
    expect(inputEl).toBeInTheDocument();
  });
  it('renders the second Label', () => {
    render(<SelectPeriod />);
    const inputEl = screen.getByText('End Date');
    expect(inputEl).toBeInTheDocument();
  });
});
