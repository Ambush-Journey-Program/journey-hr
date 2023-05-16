import { render, screen } from '@/tests/renderWithProviders';
import { PageRequestTimeOff } from '.';

describe('<PageRequestTimeOff  />', () => {
  it('renders a Page', () => {
    render(<PageRequestTimeOff />);
    const PageRequestTimeOffEl = screen.getByTestId('PageRequestTimeOff');
    expect(PageRequestTimeOffEl).toBeInTheDocument();
  });
});
