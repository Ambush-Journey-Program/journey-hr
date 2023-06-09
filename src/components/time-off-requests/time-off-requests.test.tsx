import { render, screen } from '@/tests/renderWithProviders';
import { TimeOffRequests } from '.';

describe('<TimeOffRequests  />', () => {
  it('renders the component', () => {
    render(
      <TimeOffRequests
        title="November"
        subtitle="example"
        status="Approved"
        appliedOn="example"
      />,
    );
    const TimeOffRequestsEl = screen.getByTestId('TimeOffRequests');
    expect(TimeOffRequestsEl).toBeInTheDocument();
  });

  it('has a title', () => {
    render(
      <TimeOffRequests
        title="November"
        subtitle="subtitle"
        status="Approved"
        appliedOn="example"
      />,
    );
    const title = screen.getByRole('heading', {
      name: /November/,
      level: 6,
    });
    expect(title).toBeInTheDocument();
    const subtitle = screen.getByText('subtitle');
    expect(subtitle).toBeInTheDocument();
    const status = screen.getByText('Approved');
    expect(status).toBeInTheDocument();
    const appliedOn = screen.getByText('example');
    expect(appliedOn).toBeInTheDocument();
  });
});