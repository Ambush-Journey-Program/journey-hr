import * as React from 'react';
import { render, screen } from '../../tests/renderWithProviders';
import { Logo } from './logo';

describe('<Logo />', () => {
  it('renders the Logo', () => {
    render(<Logo logoVariation={'symbol'} colorVariant={'red'} />);

    const avatarEl = screen.getByTestId('Logo');
    expect(avatarEl).toBeInTheDocument();
  });
});
