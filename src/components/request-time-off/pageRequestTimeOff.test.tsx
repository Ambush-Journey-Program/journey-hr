import { render, screen } from '@/tests/renderWithProviders';
import { RequestTimeOffContent } from './pageRequestTimeOff';

describe('<PageRequestTimeOff  />', () => {
  it('renders a Page', () => {
    render(<RequestTimeOffContent />);
    const PageRequestTimeOffEl = screen.getByTestId('PageRequestTimeOff');
    expect(PageRequestTimeOffEl).toBeInTheDocument();
  });
});
