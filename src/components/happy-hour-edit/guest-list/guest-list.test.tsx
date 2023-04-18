import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { describe, expect } from 'vitest';

import { GuestList } from './guest-list';
export const mockList = [
  { guest: { id: '1', name: 'Ana Urbano', team: 'Design' } },
  { guest: { id: '2', name: 'Caio Caiado', team: 'Developer' } },
  { guest: { id: '3', name: 'GuestList', team: 'Developer' } },
];
describe('<GuestList/>', () => {
  it('renders the GuestList', () => {
    render(<GuestList guestsList={mockList} onDelete={() => {}} />);
    const guestListEl = screen.getByText('GuestList');
    expect(guestListEl).toBeInTheDocument();
  });

  it('renders the list profile', () => {
    render(<GuestList guestsList={mockList} onDelete={() => {}} />);
    const guestListEl = screen.getByText('GuestList');
    expect(guestListEl).toBeInTheDocument();
  });

  it('has a functional button', async () => {
    const onDeleteMock = vi.fn();
    render(<GuestList guestsList={[mockList[0]]} onDelete={onDeleteMock} />);
    await userEvent.click(
      screen.getByRole('button', { name: 'Delete Button' }),
    );
    expect(onDeleteMock).toHaveBeenCalled();
  });
});
