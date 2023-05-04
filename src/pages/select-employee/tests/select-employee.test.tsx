import { render, screen } from '@/tests/renderWithProviders';
import { SelectEmployee } from '..';

describe('<SelectEmployee />', () => {
  it('when the component is actually used', () => {
    const label = 'Select Employee';

    render(<SelectEmployee />);
    const labelSpan = screen.getByText(label);

    expect(labelSpan).toBeInTheDocument();
  });

  it('when the input is actually rendered', async () => {
    render(<SelectEmployee />);
    const input = screen.getByRole('textbox', {
      name: 'Type employee name',
    });

    expect(input).toBeInTheDocument();
  });

  it('renders list', () => {
    const name = 'Renata Schneider';

    render(<SelectEmployee />);
    const nameTest = screen.getByText(name);

    expect(nameTest).toBeInTheDocument();
  });
});
