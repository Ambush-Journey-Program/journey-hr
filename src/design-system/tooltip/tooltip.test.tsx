import * as React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Tooltip } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import userEvent from '@testing-library/user-event';

describe('<Tooltip />', async () => {
  it('should be visible when hovering the child element', async () => {
    const text = 'Hi';
    render(
      <ThemeProvider theme={theme}>
        <Tooltip text={text}>Hover me</Tooltip>
      </ThemeProvider>,
    );
    expect(screen.getByText(text)).not.toBeVisible();
    await userEvent.hover(screen.getByText(/Hover me/i));
    expect(screen.getByText(text)).toBeVisible();
  });
});
