import * as React from 'react';

import { render, screen } from '../../tests/renderWithProviders';

import { Doodles } from '.';

describe('<Doodles />', () => {
  it('it should be displayed', () => {
    render(<Doodles icon={'arrow1'} colors={'red'} />);
    const Doodle = screen.getByTestId('doodles');
    expect(Doodle).toBeInTheDocument();
  });
});
