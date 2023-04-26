import * as React from 'react';
import { TimeOffType } from '.';
import { render, screen } from '@/tests/renderWithProviders';

describe('<TimeOffType />', () => {
  describe('should have this render', () => {
    it('should have a title', () => {
      render(<TimeOffType />);
      const labelSpan = screen.getByText('Aplly For');
      expect(labelSpan).toBeInTheDocument();
    });
    it('should be a checked', () => {
      render(<TimeOffType />);
      const radioButton = screen.getByLabelText('Paid Time Off');
      expect(radioButton).toBeChecked();
    });
  });
});
