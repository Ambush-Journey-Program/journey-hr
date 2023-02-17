import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
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
    render(
      <ThemeProvider theme={theme}>
        <SelectInput options={exampleOptions} title={title} />
      </ThemeProvider>,
    );
    const inputEl = screen.getByText(title);
    expect(inputEl).toBeInTheDocument(title);
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

    render(
      <ThemeProvider theme={theme}>
        <SelectInput options={exampleOptions} title={title} />
      </ThemeProvider>,
    );

    const inputOptions = screen.getAllByRole('option');
    expect(inputOptions.length).toBe(4);
  });

  it('should be disabled', () => {
    render(
      <ThemeProvider theme={theme}>
        <SelectInput options={exampleOptions} title="title" disabled />
      </ThemeProvider>,
    );

    const inputEl = screen.getByTestId('input-select-test');
    expect(inputEl).toBeDisabled();
    expect(inputEl).not.toBeEnabled();
  });
});
