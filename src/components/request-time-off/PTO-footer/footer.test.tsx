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
    const fowardButton1 = screen.getByText('Request Manager');
    expect(fowardButton1).toBeVisible();
    const cancelButton1 = screen.getByText('Cancel');
    expect(cancelButton1).toBeVisible();
    const confirmationButton1 = screen.getByText('Confirm Dates');
    expect(confirmationButton1).not.toBeVisible();
  });

  it('should renders the buttons according to the "timeOff" variant ', () => {
    render(<Footer variant="timeOff" />);
    const fowardButton2 = screen.getByText('Apply Time Off');
    expect(fowardButton2).toBeVisible();
    const cancelButton2 = screen.getByText('Cancel');
    expect(cancelButton2).toBeVisible();
    const confirmationButton2 = screen.getByText('Confirm Dates');
    expect(confirmationButton2).not.toBeVisible();
  });

  it('should renders the buttons according to the "confirm" variant ', () => {
    render(<Footer variant="confirm" />);
    const fowardButton2 = screen.getByTestId('fowardButton');
    expect(fowardButton2).not.toBeVisible();
    const cancelButton2 = screen.getByText('Cancel');
    expect(cancelButton2).not.toBeVisible();
    const confirmationButton2 = screen.getByText('Confirm Dates');
    expect(confirmationButton2).toBeVisible();
  });

  it('should renders the buttons according to the "allDone" variant ', () => {
    render(<Footer variant="allDone" />);
    const fowardButton2 = screen.getByText('Go to Homepage');
    expect(fowardButton2).toBeVisible();
    const cancelButton2 = screen.getByText('Cancel');
    expect(cancelButton2).not.toBeVisible();
    const confirmationButton2 = screen.getByText('Confirm Dates');
    expect(confirmationButton2).not.toBeVisible();
  });
});
