import { render, screen } from '@/tests/renderWithProviders';
import { BrazilianHolidays } from './brazilian-holidays';

describe('<BrazilianHolidays  />', () => {
  it('renders the component', () => {
    render(<BrazilianHolidays />);
    const BrazilianHolidaysEl = screen.getByTestId('brazilianHolidays');
    expect(BrazilianHolidaysEl).toBeInTheDocument();
  });

  it('should renders the inner components', () => {
    render(<BrazilianHolidays />);
    const USHolidaysEl = screen.getByText('Corpus Christi');
    expect(USHolidaysEl).toBeInTheDocument();
  });
});
