import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { SegmentedControl } from '.';

describe('<SegmentedControl />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      const label = 'it works';
      const props = { label };

      render(<SegmentedControl {...props} />);
      const labelSpan = screen.getByText(label);

      expect(labelSpan).toBeInTheDocument();
    });
  });
});
