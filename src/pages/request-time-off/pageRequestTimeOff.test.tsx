import { render, screen } from '@/tests/renderWithProviders';
import { RequestTimeOff } from './pageRequestTimeOff';

describe('<PageRequestTimeOff  />', () => {
  it('renders a Page', () => {
    render(<RequestTimeOff />);
    const PageRequestTimeOffEl = screen.getByTestId('PageRequestTimeOff');
    expect(PageRequestTimeOffEl).toBeInTheDocument();
  });
});
