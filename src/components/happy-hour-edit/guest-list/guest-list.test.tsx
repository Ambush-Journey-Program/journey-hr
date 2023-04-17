import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { describe, expect } from 'vitest';

import { GuestList } from './guest-list';

import { guestsList } from '../const';

describe('<GuestList/>', () => {
  it('renders the GuestList', () => {
    render(<GuestList guestsList={guestsList} onDelete={() => {}} />);

    const guestListEl = screen.getByTestId('GuestList');
    expect(guestListEl).toBeInTheDocument();
  });

  it('renders the list profile', () => {
    render(<GuestList guestsList={guestsList} onDelete={() => {}} />);

    const guestListEl = screen.getByText('Test');
    expect(guestListEl).toBeInTheDocument();
  });

  it('has a functional button', async () => {
    const onDeleteMock = vi.fn();
    render(<GuestList guestsList={[guestsList[0]]} onDelete={onDeleteMock} />);

    await userEvent.click(
      screen.getByRole('button', { name: 'Delete Button' }),
    );
    expect(onDeleteMock).toHaveBeenCalled();
  });
});
