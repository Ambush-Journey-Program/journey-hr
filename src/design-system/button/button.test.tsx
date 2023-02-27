import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  it('renders the simple Button component', () => {
    const label = 'My Button';

    render(
      <ThemeProvider theme={theme}>
        <Button disabled>{label}</Button>
      </ThemeProvider>,
    );

    const buttonEl = screen.getByText(label);
    expect(buttonEl).toBeInTheDocument();
  });

  it('is disabled, when disabled is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button disabled>My Button</Button>
      </ThemeProvider>,
    );

    const buttonEl = screen.getByText('My Button');
    expect(buttonEl).toBeDisabled();
    expect(buttonEl).not.toBeEnabled();
  });

  it('calls onClick function when clicked', async () => {
    const onClickMock = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock}>My Button</Button>
      </ThemeProvider>,
    );

    await userEvent.click(screen.getByText('My Button'));

    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders icons', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Button icon={'PlusIcon'}>Label</Button>
      </ThemeProvider>,
    );
    const iconEl = screen.getByTestId('button-icon');
    expect(iconEl).toBeInTheDocument();
  });

  it('Not renders icons', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Label</Button>
      </ThemeProvider>,
    );
    const iconEl = screen.queryByTestId('button-icon');
    expect(iconEl).toBeNull();
  });
});
