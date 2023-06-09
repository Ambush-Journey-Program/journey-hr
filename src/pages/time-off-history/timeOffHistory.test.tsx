import { render, screen } from '@/tests/renderWithProviders';
import { TimeOffHistory } from '.';

describe('<TimeOffHistory  />', () => {
  it('renders a Page', () => {
    render(<TimeOffHistory />);
    const TimeOffHistoryEl = screen.getByTestId('TimeOffHistory');
    expect(TimeOffHistoryEl).toBeInTheDocument();
  });
});
