import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { BackButton } from '.';

describe('<BackButton />', () => {
  describe('should display Back button', () => {
    it('The button is not disabled and clickable', () => {
      const onClickMock = vi.fn();
      render(<BackButton disabled={true} onClick={onClickMock} />);
      expect(screen.getByText('Back')).not.toBeDisabled();
    });

    it('The button is disabled and unclickable', () => {
      const onClickMock = vi.fn();
      render(<BackButton disabled={false} onClick={onClickMock} />);
      const backButton = screen.getByText('Back');
      userEvent.click(backButton);
      expect(backButton).toBeDisabled();
    });
  });
});
