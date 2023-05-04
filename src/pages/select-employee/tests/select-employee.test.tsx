import { render, screen } from '@/tests/renderWithProviders';
import { SelectEmployee } from '..';
import { employees } from '../mocking';

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
});
