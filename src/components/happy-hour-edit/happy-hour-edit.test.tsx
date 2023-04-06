import { render, screen } from '@/tests/renderWithProviders';
import * as React from 'react';
import { HappyHourEdit } from '..';

describe('<HappyHourEdit />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      const label = 'it works';
      const props = { label };

      render(<HappyHourEdit {...props} />);
      const labelSpan = screen.getByText(label);

      expect(labelSpan).toBeInTheDocument();
    });
  });
});
