import { render, screen } from '@/tests/renderWithProviders';
import { PageTimeOff } from '.';

describe('<PageTimeOff  />', () => {
  it('renders a Page', () => {
    render(<PageTimeOff />);
    const PageTimeOffEl = screen.getByTestId('PageTimeOff');
    expect(PageTimeOffEl).toBeInTheDocument();
  });
});
