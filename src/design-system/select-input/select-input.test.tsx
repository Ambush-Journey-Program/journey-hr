import { describe, expect } from 'vitest';
import { render, screen } from '@/tests/renderWithProviders';
import { SelectInput } from './select-input';

const title = 'My title';

const exampleOptions = [
  {
    label: 'Text 1',
    value: '1',
  },
  {
    label: 'Text 2',
    value: '2',
  },
  {
    label: 'Text 3',
    value: '3',
  },
];

describe('<SelectInput />', () => {
  it('has a title', () => {
    render(<SelectInput options={exampleOptions} title={title} />);
    const inputEl = screen.getByText(title);
    expect(inputEl).toBeInTheDocument();
  });

  it('should have options', () => {
    const title = 'My title';

    const exampleOptions = [
      {
        label: 'Text 1',
        value: '1',
      },
      {
        label: 'Text 2',
        value: '2',
      },
      {
        label: 'Text 3',
        value: '3',
      },
    ];

    render(<SelectInput options={exampleOptions} title={title} />);

    const inputOptions = screen.getAllByRole('option');
    expect(inputOptions.length).toBe(4);
  });

  it('should be disabled', () => {
    render(<SelectInput options={exampleOptions} title="title" disabled />);

    const inputEl = screen.getByTestId('input-select-test');
    expect(inputEl).toBeDisabled();
    expect(inputEl).not.toBeEnabled();
  });
});
