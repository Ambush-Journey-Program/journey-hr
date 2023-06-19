import { render, screen } from '@/tests/renderWithProviders';
import { HappyHourSchedule } from '.';

describe('<HappyHourSchedule />', () => {
  it('renders the Happy Hour Schedule', () => {
    render(<HappyHourSchedule />);
    const element = screen.getByTestId('happyHourSchedule');
    expect(element).toHaveTextContent('Schedule');
  });
});
