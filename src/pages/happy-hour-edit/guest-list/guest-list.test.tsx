import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { EMPLOYEES, GUESTS_LIST_DATA } from '../const';
import { GuestList } from '.';

describe('<GuestList/>', () => {
  it('renders the GuestList', () => {
    render(<GuestList guestsList={GUESTS_LIST_DATA} onDelete={() => {}} />);
    const guestListEl = screen.getByTestId('GuestList');
    expect(guestListEl).toBeInTheDocument();
  });

  it('renders the list profile', () => {
    render(<GuestList guestsList={GUESTS_LIST_DATA} onDelete={() => {}} />);
    const guestListEl = screen.getByTestId('GuestList');
    expect(guestListEl).toBeInTheDocument();
  });

  it('has a functional button', async () => {
    const onDeleteMock = jest.fn();
    render(<GuestList guestsList={[EMPLOYEES[0]]} onDelete={onDeleteMock} />);
    const deleteBtn = screen.getByLabelText('Delete Button');
    await userEvent.click(deleteBtn);
    expect(onDeleteMock).toHaveBeenCalled();
  });
});
