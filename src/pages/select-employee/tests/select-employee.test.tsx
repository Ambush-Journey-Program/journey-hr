import { render, screen } from '@/tests/renderWithProviders';
import { SelectEmployee } from '..';
import { employees } from '../mocking';
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

  it('renders list', () => {
    const name = 'Renata Schneider';

    render(<SelectEmployee employees={employees} />);
    const nameTest = screen.getByText(name);

    expect(nameTest).toBeInTheDocument();
  });

  it('renders currentUser', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );
    const nameTest = screen.getByText('Renata Schneider (Me)');

    expect(nameTest).toBeInTheDocument();
  });

  it('checks the input behaviour', async () => {
    render(
      <SelectEmployee employees={employees} currentUser="Renata Schneider" />,
    );

    const input = screen.getByRole('textbox', {
      name: 'Type employee name',
    });

    await userEvent.type(input, 'Ana Urbano');
    expect(input.value).toBe('Ana Urbano');
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
