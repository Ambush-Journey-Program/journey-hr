import { render } from '@/tests/renderWithProviders';
import { screen } from '@testing-library/dom';
import { BackButton } from '.';

describe('<BackButton />', () => {
  describe('should display Back button', () => {
    it('The component button is not disabled', () => {
      render(<BackButton />);
      const backButton = screen.getByText('Back');
      expect(backButton).not.toBeDisabled();
    });
  });
});
