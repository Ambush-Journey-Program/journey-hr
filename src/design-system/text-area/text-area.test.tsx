import { describe, expect } from 'vitest';
import { render, screen } from '@/src/../tests/renderWithProviders';
import { TextArea } from './text-area';

describe('<TextArea />', () => {
  it('renders the Big Input', () => {
    render(
      <TextArea
        rows={3}
        minLength={3}
        spellCheck={true}
        placeholder={'placeholder'}
      />,
    );
    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeInTheDocument();
  });

  it('could be required', () => {
    render(
      <TextArea
        rows={3}
        required
        minLength={3}
        spellCheck={true}
        placeholder={'placeholder'}
      />,
    );

    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeRequired();
  });

  it('has a placeholder value', () => {
    render(
      <TextArea
        rows={3}
        minLength={3}
        spellCheck={true}
        placeholder={'placeholder'}
      />,
    );
    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeInTheDocument();
  });
});
