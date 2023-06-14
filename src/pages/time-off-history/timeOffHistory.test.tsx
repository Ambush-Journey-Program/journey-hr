import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import TimeOffHistory from '.';

describe('<TimeOffHistory  />', () => {
  it('renders a Page', () => {
    render(<TimeOffHistory />);
    const TimeOffHistoryEl = screen.getByTestId('TimeOffHistory');
    expect(TimeOffHistoryEl).toBeInTheDocument();
  });

  it('renders the tab section', async () => {
    render(<TimeOffHistory />);

    const tabElement = screen.queryByText('Nov 01 Wed - Nov 30 Thu, 2023');
    expect(tabElement).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Past Requests'));

    const tabEl = await screen.findByText('Nov 01 Wed - Nov 30 Thu, 2023');
    expect(tabEl).toBeVisible();
  });
});
