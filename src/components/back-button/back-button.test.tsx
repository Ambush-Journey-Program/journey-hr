import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { BackButton } from './back-button';

describe('<BackButton />', () => {
  describe('should display Back button', () => {
    it('calls onClick button when the button is not disabled', async () => {
      const onClickMock = jest.fn();
      render(<BackButton onClick={onClickMock} />);
      const backButton = screen.getByText('Back');
      await userEvent.click(backButton);
      expect(onClickMock).toBeCalled();
      expect(backButton).not.toBeDisabled();
    });

    it('not calls onClick button when the button is disabled', async () => {
      const onClickMock = jest.fn();
      render(<BackButton disabled onClick={onClickMock} />);
      const backButton = screen.getByText('Back');
      await userEvent.click(backButton);
      expect(onClickMock).not.toBeCalled();
      expect(backButton).toBeDisabled();
    });
  });
});
