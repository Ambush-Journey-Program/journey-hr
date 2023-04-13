import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { RadioButton } from '.';
import { mockLabel } from './const';
import userEvent from '@testing-library/user-event';

describe('<RadioButton />', () => {
  describe('should have this remove', () => {
    it('Render the checkbox clicked', async () => {
      const onClickMock = vi.fn();
      render(<RadioButton optionsLabel={mockLabel} onClick={onClickMock} />);
      const radioButton = screen.getByText('Medium');
      await userEvent.click(radioButton);
      expect(onClickMock).toBeChecked;
      expect(radioButton).not.toBeDisabled();
    });
    it('The checkbox should be visible', () => {
      render(<RadioButton optionsLabel={mockLabel} />);
      const radioButton = screen.getByText('Medium');
      expect(radioButton).toBeVisible();
    });
    it('should be the checkbox unchecked', () => {
      render(<RadioButton optionsLabel={mockLabel} />);
      const radioButton = screen.getByText('Medium');
      expect(radioButton).not.toBeChecked();
    });
  });
});
