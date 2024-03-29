import { render, screen } from '@/tests/renderWithProviders';
import { Input } from '.';

describe('<Input />', () => {
  it('renders the Input', () => {
    render(<Input label="label" onTextChange={jest.fn()} />);
    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeInTheDocument();
  });

  it('could be disabled', () => {
    render(<Input label="label" disabled onTextChange={jest.fn()} />);

    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeDisabled();
    expect(inputEl).not.toBeEnabled();
  });

  it('could be required', () => {
    render(<Input label="label" required onTextChange={jest.fn()} />);

    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeRequired();
  });

  it('has a required label on the component when needed', () => {
    render(<Input required placeholder="placeholder" onTextChange={jest.fn()} />);

    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeRequired();
    const msgRequired = screen.getByText('Required');
    expect(msgRequired).toBeInTheDocument();
  });

  it('does not have a required label when the component is optional', () => {
    render(<Input placeholder="placeholder" onTextChange={jest.fn()} />);

    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeInTheDocument();

    const msgRequired = screen.queryByText('Required');
    expect(msgRequired).toBeNull();
  });
});
