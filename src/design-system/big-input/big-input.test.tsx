import { describe, expect } from 'vitest';
import { render, screen } from '@/src/../tests/renderWithProviders';
import { BigInput } from './big-input';

describe('<BigInput />', () => {
  it('renders the Big Input', () => {
    render(<BigInput rows={3} minLength={3} spellCheck={true} />);
    const inputEl = screen.getByTestId('big-input-test');
    expect(inputEl).toBeInTheDocument();
  });

  it('could be required', () => {
    render(<BigInput rows={3} required minLength={3} spellCheck={true} />);

    const inputEl = screen.getByTestId('big-input-test');
    expect(inputEl).toBeRequired();
  });

  it('has a placeholder value', () => {
    render(<BigInput rows={3} minLength={3} spellCheck={true} />);
    const inputEl = screen.getByPlaceholderText('Write the description');
    expect(inputEl).toBeInTheDocument();
  });
});
