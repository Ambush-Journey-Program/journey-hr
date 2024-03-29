import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { PageHeader } from '.';

describe('<PageHeader  />', () => {
  it('has a title', () => {
    render(<PageHeader title="Happy" subtitle="Choose" />);
    const textTest = screen.getByRole('heading', { name: /Happy/ });
    expect(textTest).toBeInTheDocument();
  });

  it('has a subtitle', () => {
    render(<PageHeader title="Happy" subtitle="Choose" />);
    const textTest = screen.getByText('Choose');
    expect(textTest).toBeInTheDocument();
  });

  it('should exist', () => {
    render(<PageHeader title="Happy" subtitle="Choose" />);
    const textTest = screen.getByRole('heading', {
      level: 4,
      name: 'Happy'
    });
    expect(textTest).toBeDefined();
  });
});
