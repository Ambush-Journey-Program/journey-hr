import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Summary } from '../summary';

describe('<Summary  />', () => {
  render(<Summary />);
  it('renders the summary', () => {
    const textTest = screen.getByTestId('summary');
    expect(textTest).toHaveTextContent('Request Summary');
  });

  it('It should have a edit button', () => {
    render(<Summary />);
    const summaryButton = screen.getByTestId('Edit');
    expect(summaryButton).toBeInTheDocument();
  });

  it('It should have a delete button', () => {
    render(<Summary />);
    const summaryButton = screen.getByTestId('Delete');
    expect(summaryButton).toBeInTheDocument();
  });
});
