import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { SegmentedControl } from '.';

describe('<SegmentedControl />', () => {
  describe('should have this render', () => {
    it('should have a Tab', () => {
      render(<SegmentedControl />);
      const container = screen.getByText('Page 1');
      expect(container).toBeInTheDocument();
    });
  });
});
