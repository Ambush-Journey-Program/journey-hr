import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { PageHeader } from '..';

describe('<PageHeader  />', () => {
  render(<PageHeader title={'Happy'} subtitle={'Choose'} />);
  it('should exist', () => {
    const textTest = screen.getByTestId('page-header');
    expect(textTest).toBeInTheDocument();
  });
});
