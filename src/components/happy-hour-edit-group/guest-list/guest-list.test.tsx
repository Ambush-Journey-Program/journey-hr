import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { describe, expect } from 'vitest';

import { GuestList } from './guest-list';

import { guestsList } from './mocking-list';

describe('<GuestList/>', () => {
  it('renders the GuestList', () => {
    render(<GuestList guestsList={guestsList} onDelete={() => {}} />);

    const titleEl = screen.getByTestId('GuestList');
    expect(titleEl).toBeInTheDocument();
  });

  it('renders the list profile', () => {
    render(<GuestList guestsList={guestsList} onDelete={() => {}} />);

    const titleEl = screen.getByText('Test');
    expect(titleEl).toBeInTheDocument();
  });

  it('has a functional button', async () => {
    const onDeleteMock = vi.fn();
    render(<GuestList guestsList={guestsList} onDelete={onDeleteMock} />);

    await userEvent.click(
      screen.getByRole('button', { name: 'Delete Button' }),
    );
    expect(onDeleteMock).toHaveBeenCalled();
  });
});
