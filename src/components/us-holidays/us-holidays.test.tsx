import { render, screen } from '@/tests/renderWithProviders';
import { USHolidays } from './us-holidays';

describe('<USHolidays  />', () => {
  it('renders the whole component', () => {
    render(<USHolidays />);
    const USHolidaysEl = screen.getByTestId('USHolidays');
    expect(USHolidaysEl).toBeInTheDocument();
  });

  it('should renders the inner components', () => {
    render(<USHolidays />);
    const USHolidaysEl = screen.getByText('Memorial Day');
    expect(USHolidaysEl).toBeInTheDocument();
  });
});
