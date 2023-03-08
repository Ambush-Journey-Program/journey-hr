import * as React from 'react';

import { render, screen } from '../../tests/renderWithProviders';

import { Tooltip } from '.';

import { theme } from '../../styles/theme';

import 'jest-styled-components';
describe('<Tooltip />', async () => {
  it('should be visible when hovering the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);
    expect(screen.getByText(text)).toHaveStyleRule(
      `background-color: ${theme.color.white}`,
    );
  });
});
