import * as React from 'react';

import { render, screen } from '../../tests/renderWithProviders';

import { Tooltip } from '.';

import { theme } from '../../styles/theme';
import userEvent from '@testing-library/user-event';

import 'jest-styled-components';

describe('<Tooltip />', async () => {
  it.skip('should be visible when hovering the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);
    expect(screen.getByText(text)).toHaveStyleRule(
      `background-color: ${theme.color.white}`,
    );
  });
});

// const termsAndConditions = screen.getByText(/terms and conditions/i);
//   userEvent.hover(termsAndConditions);

//   const popover = screen.queryByText(/No ice cream will be delivered/i);
//   expect(popover).toBeInTheDocument();

//   // popover disappears when we mouse out
//   userEvent.unhover(termsAndConditions);
//   await waitForElementToBeRemoved(() =>
//     screen.queryByText(/No ice cream will be delivered/i)
//   );
// });

// popover starts out hidden
// const nullPopover = screen.queryByText(
//   /No ice cream will be delivered/i
// );
// expect(nullPopover).not.toBeInTheDocument();

// popover appears upon mouseover of checkbox label
