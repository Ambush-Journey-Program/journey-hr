import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Summary } from '../summary';

describe('<Summary  />', () => {
  render(<Summary />);
  it('should exist', () => {
    const textTest = screen.getByTestId('summary');
    expect(textTest).toHaveTextContent('Back');
  });
});
