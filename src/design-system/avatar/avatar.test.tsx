import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '../../tests/renderWithProviders';
import { Avatar } from './avatar';

describe('<Avatar />', () => {
  it('renders the Avatar', () => {
    render(<Avatar src="src/design-system/avatar/User-Photo.png" />);
    const avatarEl = screen.getByTestId('Avatar');
    expect(avatarEl).toBeInTheDocument();
  });
});
