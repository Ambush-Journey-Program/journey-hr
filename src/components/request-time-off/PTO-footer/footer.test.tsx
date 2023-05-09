import { render, screen } from '@/tests/renderWithProviders';
import { Footer } from './footer';

describe('<Footer/>', () => {
  render(<Footer variant="request" />);

  it('should exist', () => {
    const textTest = screen.getByTestId('footer');
    expect(textTest).toBeInTheDocument();
  });

  it('should renders the buttons according to the "request" variant ', () => {
    render(<Footer variant="request" />);
    const fowardButton = screen.getByText('Request Manager');
    expect(fowardButton).toBeVisible();
    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeVisible();
    const confirmationButton = screen.getByText('Confirm Dates');
    expect(confirmationButton).not.toBeVisible();
  });

  it('should renders the buttons according to the "timeOff" variant ', () => {
    render(<Footer variant="timeOff" />);
    const fowardButton = screen.getByText('Apply Time Off');
    expect(fowardButton).toBeVisible();
    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeVisible();
    const confirmationButton = screen.getByText('Confirm Dates');
    expect(confirmationButton).not.toBeVisible();
  });

  it('should renders the buttons according to the "confirm" variant ', () => {
    render(<Footer variant="confirm" />);
    const fowardButton = screen.getByTestId('fowardButton');
    expect(fowardButton).not.toBeVisible();
    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).not.toBeVisible();
    const confirmationButton = screen.getByText('Confirm Dates');
    expect(confirmationButton).toBeVisible();
  });

  it('should renders the buttons according to the "allDone" variant ', () => {
    render(<Footer variant="allDone" />);
    const fowardButton = screen.getByText('Go to Homepage');
    expect(fowardButton).toBeVisible();
    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).not.toBeVisible();
    const confirmationButton = screen.getByText('Confirm Dates');
    expect(confirmationButton).not.toBeVisible();
  });
});
