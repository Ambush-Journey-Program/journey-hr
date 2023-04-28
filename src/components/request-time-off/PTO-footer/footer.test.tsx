import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Footer } from './footer';

describe('<Footer  />', () => {
  render(<Footer title={'Happy'} subtitle={'Choose'} />);
  it('should exist', () => {
    const textTest = screen.getByTestId('page-header');
    expect(textTest).toHaveTextContent('Back');
  });
});
