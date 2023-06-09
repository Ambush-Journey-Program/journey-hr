import { render, screen } from '@/tests/renderWithProviders';
import { TimeOffRequests } from '.';

describe('<TimeOffRequests  />', () => {
  it('renders the component', () => {
    render(
      <TimeOffRequests
        title="November"
        subtitle={''}
        status={''}
        appliedOn={''}
      />,
    );
    const TimeOffRequestsEl = screen.getByTestId('TimeOffRequests');
    expect(TimeOffRequestsEl).toBeInTheDocument();
  });

  it('has a title', () => {
    render(
      <TimeOffRequests
        title="November"
        subtitle={''}
        status={''}
        appliedOn={''}
      />,
    );
    const textTest = screen.getByRole('heading', { name: /November/ });
    expect(textTest).toBeInTheDocument();
  });
});
