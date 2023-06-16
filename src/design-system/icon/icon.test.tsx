import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Icon } from '.';

describe('<Icon />', () => {
  it('when the component is actually used', () => {
    render(<Icon color="accepted" />);
    const IconTest = screen.findByLabelText('icon');

    expect(IconTest).toBeDefined();
  });
});
