import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Summary } from '../summary';

describe('<Summary  />', () => {
  render(<Summary variant={'employee'} />);
  it('renders the summary', () => {
    const textTest = screen.getByTestId('summary');
    expect(textTest).toHaveTextContent('Request Summary');
  });

  it('should have a edit button', () => {
    render(<Summary variant={'employee'} />);
    const summaryButton = screen.getByTestId('Edit');
    expect(summaryButton).toBeInTheDocument();
  });

  it(' should have a delete button', () => {
    render(<Summary variant={'employee'} />);
    const summaryButton = screen.getByTestId('Delete');
    expect(summaryButton).toBeInTheDocument();
  });
});
