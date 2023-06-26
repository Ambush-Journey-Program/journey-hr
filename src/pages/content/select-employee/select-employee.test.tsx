import { render, screen } from '@/tests/renderWithProviders';
import { SelectEmployee } from '.';
import { employees } from './mocking';
import userEvent from '@testing-library/user-event';

describe('<SelectEmployee />', () => {
  it('when the component is actually used', () => {
    render(<SelectEmployee employees={employees} />);
    const labelSpan = screen.getByTestId('titleTest');

    expect(labelSpan).toBeInTheDocument();
  });

  it('when the input is actually rendered', () => {
    render(<SelectEmployee employees={employees} />);
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('renders currentUser', () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );
    const list = screen.getAllByTestId('listTest');
    expect(list).toHaveLength(11);
    expect(list[0]).toHaveTextContent('Renata Schneider (Me)');
    expect(list[1]).toHaveTextContent('Ana Urbano');
  });

  it('shows at the list "Ana Urbana" when searching for her', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Ana Urbano');
    const list = screen.getByTestId('listTest');
    expect(input.value).toBe('Ana Urbano');
    expect(list).toHaveTextContent('Ana Urbano');
    expect([list]).toHaveLength(1);
  });

  it('returns a "No matches found" message if no item is found', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Aaa');
    const error = screen.getByText('No matches found');

    expect(error).toBeInTheDocument();
  });
});
