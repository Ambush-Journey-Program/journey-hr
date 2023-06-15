import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Avatar } from '.';

describe('<Avatar />', () => {
  it('renders the Avatar', () => {
    render(<Avatar src="src/design-system/avatar/User-Photo.png" sizeVariant={'small'} />);
    const avatarEl = screen.getByTestId('Avatar');
    expect(avatarEl).toBeInTheDocument();
  });
});
