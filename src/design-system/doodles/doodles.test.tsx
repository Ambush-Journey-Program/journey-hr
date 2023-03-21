import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { Doodles } from '.';

describe('<Doodles />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      const label = 'it works';
      const props = { label };

      render(<Doodles {...props} />);
      const labelSpan = screen.getByText(label);

      expect(labelSpan).toBeInTheDocument();
    });
  });
});
