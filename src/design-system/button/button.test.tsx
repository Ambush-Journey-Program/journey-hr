import * as React from 'react';
// import { expect, describe, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Button } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  test('using button tag, then render the label text from children', () => {
    const labelText: string = 'My Button';
    render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>,
    );

    const buttonEl = screen.getByText(labelText);

    expect(buttonEl).toBe;
  });
});
