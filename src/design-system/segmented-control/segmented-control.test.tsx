import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { SegmentedControl } from '.';

describe('<SegmentedControl />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      const label = 'Label';

      render(<SegmentedControl label={label} selected={false} />);
      const link = screen.getByTestId('button-icon');
      expect(link).toBeInTheDocument();
    });
  });
});
