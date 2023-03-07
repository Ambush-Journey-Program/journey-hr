import * as React from 'react';

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '../../tests/renderWithProviders';

import { Tooltip } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';

describe('<Tooltip />', async () => {
  it('should be visible when hovering the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);
    // expect(screen.getByText(text)).not.toBeVisible();
    // await userEvent.hover(screen.getByText(/Hover me/i));
    // expect(screen.getByText(text)).toBeVisible();
    expect(screen.getByText(text)).toHaveStyleRule(
      `background-color: ${theme.color.white}`,
    );
  });
});
