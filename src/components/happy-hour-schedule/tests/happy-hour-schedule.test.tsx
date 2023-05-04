import { render, screen } from '@/tests/renderWithProviders';
import { HappyHourSchedule } from '../happy-hour-schedule';

describe('<HappyHourSchedule />', () => {
  it('renders the Happy Hour Schedule', () => {
    render(<HappyHourSchedule handleSelect={() => {}} />);
    const element = screen.getByTestId('happyHourSchedule');
    expect(element).toHaveTextContent('Schedule');
  });
});
