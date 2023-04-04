import { describe, expect } from 'vitest';
import { render, screen } from '@/src/../tests/renderWithProviders';
import { TextArea } from './text-area';

describe('<TextArea />', () => {
  it('renders the Big Input', () => {
    render(
      <TextArea rows={3} minLength={3} spellCheck placeholder="placeholder" />,
    );
    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeInTheDocument();
  });

  it('shows required message when passing required prop', () => {
    render(
      <TextArea
        rows={3}
        required
        minLength={3}
        spellCheck
        placeholder="placeholder"
      />,
    );

    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeRequired();
  });

  it('has a placeholder value', () => {
    render(
      <TextArea rows={3} minLength={3} spellCheck placeholder="placeholder" />,
    );
    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeInTheDocument();
  });

  it('renders the error message', () => {
    render(
      <TextArea
        rows={3}
        minLength={3}
        error
        spellCheck
        placeholder="placeholder"
      />,
    );
    const inputEl = screen.getByText('Description Required');
    expect(inputEl).toBeInTheDocument();
  });
});
