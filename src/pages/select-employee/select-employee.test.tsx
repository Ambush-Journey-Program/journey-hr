import { render, screen } from '@/tests/renderWithProviders';
import { SelectEmployee } from '.';
import { employees } from './mocking';
import userEvent from '@testing-library/user-event';

describe('<SelectEmployee />', () => {
  it('when the component is actually used', () => {
    const label = 'Select Employee';

    render(<SelectEmployee employees={employees} />);
    const labelSpan = screen.getByText(label);

    expect(labelSpan).toBeInTheDocument();
  });

  it('when the input is actually rendered', async () => {
    render(<SelectEmployee employees={employees} />);
    const input = screen.getByRole('textbox', {
      name: 'Type employee name',
    });

    expect(input).toBeInTheDocument();
  });

  it('renders currentUser', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );
    const list = screen.getAllByTestId('listTest');
    expect(list).toHaveLength(11);
    expect(list[0]).toHaveTextContent('Renata Schneider (Me)');
    expect(list[1]).toHaveTextContent('Ana Urbano');
  });

  it('checks the input behaviour', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );

    const input = screen.getByRole('textbox', {
      name: 'Type employee name',
    });
    await userEvent.type(input, 'Ana Urbano');
    const list = screen.getByTestId('listTest');
    expect(input.value).toBe('Ana Urbano');
    expect(list).toHaveTextContent('Ana Urbano');
    expect([list]).toHaveLength(1);
  });

  it('checks the input lenght', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );

    const input = screen.getByRole('textbox', {
      name: 'Type employee name',
    });
    await userEvent.type(input, 'ca');
    const list = screen.getAllByTestId('listTest');
    expect(list).toHaveLength(2);
  });

  it('checks if the error is in the document', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );

    const input = screen.getByRole('textbox', {
      name: 'Type employee name',
    });
    await userEvent.type(input, 'Aaa');
    const error = screen.getByText(
      "We could't find anyone with this name. Check your spelling or try a different name.",
    );

    expect(error).toBeInTheDocument();
  });
});
