import { describe, expect } from 'vitest';
import { render, screen } from '@/tests/renderWithProviders';
import { Input } from './input';

describe('<Input />', () => {
  it('renders the Input', () => {
    render(<Input label="label" />);
    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeInTheDocument();
  });

  it('could be disabled', () => {
    render(<Input label="label" disabled />);

    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeDisabled();
    expect(inputEl).not.toBeEnabled();
  });

  it('could be required', () => {
    render(<Input label="label" required />);

    const inputEl = screen.getByTestId('input-test');
    expect(inputEl).toBeRequired();
  });
});
