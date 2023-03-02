import * as React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Tooltip } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import userEvent from '@testing-library/user-event';

describe('<Tooltip />', async () => {
  it('should be visible when hovering the child element', async () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Tooltip text={'oi'}>Hover me</Tooltip>
      </ThemeProvider>,
    );
    const popOver = getByTestId('tooltipText');
    expect(popOver).toHaveStyle({ display: 'none' });
    await userEvent.hover(getByTestId('tooltipWrapper'));
    expect(getByTestId('tooltipText')).toHaveStyle({ display: 'block' });
    //tentativa2 com .toBeVisible
    // expect(popOver).toHaveStyle('visibility: visible');
    // const span = await waitFor(() =>
    //   screen.findByRole('span', { hidden: true }),
    // );
    // expect(span).toBeVisible;

    // expect(await screen.findByText('oi')).toBeInTheDocument();

    // fireEvent.mouseOver(childComponent);
    // expect(screen.queryByTestId('tooltipText')).toContain('oi');
    // expect(await screen.findByText('ei')).toBeInTheDocument();

    //
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
