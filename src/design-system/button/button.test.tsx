import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  it('using button tag, then render the label text from children', () => {
    const label = 'My Button';

    render(
      <ThemeProvider theme={theme}>
        <Button disabled>{label}</Button>
      </ThemeProvider>,
    );

    const buttonEl = screen.getByText(label);
    expect(buttonEl).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button disabled>My Button</Button>
      </ThemeProvider>,
    );

    const buttonEl = screen.getByText('My Button');
    expect(buttonEl).toBeDisabled();
    expect(buttonEl).not.toBeEnabled();
  });

  it('should call onClick function', async () => {
    const onClickMock = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock}>My Button</Button>
      </ThemeProvider>,
    );

    await userEvent.click(screen.getByText('My Button'));

    expect(onClickMock).toHaveBeenCalled();
  });
});
