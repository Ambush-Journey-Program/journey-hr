import { render } from '@/tests/renderWithProviders';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { BackButton } from '.';

describe('<BackButton />', () => {
  describe('should display Back button', () => {
    it('The component button is not disabled', () => {
      render(<BackButton />);
      const backButton = screen.getByText('Back');
      userEvent.click(backButton);
      expect(backButton).not.toBeDisabled();
    });
  });
});
