import * as React from 'react';

import { Icon } from './icon';
import { render, screen } from '@/tests/renderWithProviders';

describe('<Icon />', () => {
  it('when the component is actually used', () => {
    render(<Icon color="accepted" />);
    const IconTest = screen.findByLabelText('icon');

    expect(IconTest).toBeDefined();
  });
});
