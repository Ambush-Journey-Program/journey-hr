import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { TimeOffType } from './time-off-type';

describe('<TimeOffType />', () => {
  describe('should have this render', () => {
    it('should have a title', () => {
      render(<TimeOffType />);
      const labelSpan = screen.getByText('Apply For');
      expect(labelSpan).toBeInTheDocument();
    });
    it('should be a checked', () => {
      render(<TimeOffType />);
      const radioButton = screen.getByLabelText('Paid Time Off');
      expect(radioButton).toBeChecked();
    });
  });
});
