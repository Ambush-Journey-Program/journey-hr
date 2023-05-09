import { render, screen } from '@/tests/renderWithProviders';
import { Footer } from './footer';

describe('<Footer/>', () => {
  render(<Footer variant="request" />);

  it('should exist', () => {
    const textTest = screen.queryByTestId('footer');
    expect(textTest).toBeInTheDocument();
  });

  it('should renders the buttons according to the "request" variant ', () => {
    render(<Footer variant="request" />);
    const fowardButton = screen.queryByText('Request Manager');
    expect(fowardButton).toBeVisible();
    const cancelButton = screen.queryByText('Cancel');
    expect(cancelButton).toBeVisible();
    const confirmationButton = screen.queryByText('Confirm Dates');
    expect(confirmationButton).not.toBeInTheDocument();
  });

  it('should renders the buttons according to the "timeOff" variant ', () => {
    render(<Footer variant="timeOff" />);
    const fowardButton = screen.queryByText('Apply Time Off');
    expect(fowardButton).toBeVisible();
    const cancelButton = screen.queryByText('Cancel');
    expect(cancelButton).toBeVisible();
    const confirmationButton = screen.queryByText('Confirm Dates');
    expect(confirmationButton).not.toBeInTheDocument();
  });

  it('should renders the buttons according to the "confirm" variant ', () => {
    render(<Footer variant="confirm" />);
    const fowardButton = screen.queryByTestId('fowardButton');
    expect(fowardButton).not.toBeInTheDocument();
    const cancelButton = screen.queryByText('Cancel');
    expect(cancelButton).not.toBeInTheDocument();
    const confirmationButton = screen.queryByText('Confirm Dates');
    expect(confirmationButton).toBeVisible();
  });

  it('should renders the buttons according to the "allDone" variant ', () => {
    render(<Footer variant="allDone" />);
    const fowardButton = screen.queryByText('Go to Homepage');
    expect(fowardButton).toBeVisible();
    const cancelButton = screen.queryByText('Cancel');
    expect(cancelButton).not.toBeInTheDocument();
    const confirmationButton = screen.queryByText('Confirm Dates');
    expect(confirmationButton).not.toBeInTheDocument();
  });
});
