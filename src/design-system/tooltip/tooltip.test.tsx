import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { Tooltip } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<Tooltip />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      const props = { label };

      render(
        <ThemeProvider theme={theme}>
          <Tooltip text={''} children={''} {...props} />
        </ThemeProvider>,
      );
      const label = { text };
      const labelSpan = screen.getByText(label);

      expect(labelSpan).toBeInTheDocument();
    });
  });
});
