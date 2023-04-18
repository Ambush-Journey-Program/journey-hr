import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { RadioButton } from '.';
import userEvent from '@testing-library/user-event';

describe('<RadioButton />', () => {
  describe('should have this render', () => {
    it('Render the checkbox unchecked clicked and checked', async () => {
      render(<RadioButton value="large" label="Large" name="Size" />);
      const radioButton = screen.getByLabelText('Large');
      expect(radioButton).not.toBeChecked();
      await userEvent.click(radioButton);
      expect(radioButton).toBeChecked();
    });
    it('The checkbox should be visible', () => {
      render(<RadioButton value="large" label="Large" name="Size" />);
      const radioButton = screen.getByText('Large');
      expect(radioButton).toBeVisible();
    });
    it('should be a checked checkbox', () => {
      render(<RadioButton value="large" label="Large" name="Size" checked />);
      const radioButton = screen.getByLabelText('Large');
      expect(radioButton).toBeChecked();
    });
  });
});
