import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@/tests/renderWithProviders';
import { Tooltip } from './tooltip';

describe('<Tooltip />', () => {
  it('should be visible when hovering the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);

    const tooltipEL = screen.getByText('Hover me');
    expect(screen.queryByText(text)).not.toBeInTheDocument();

    userEvent.hover(tooltipEL);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it('should be not visible when hovering out the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);

    const tooltipEL = screen.getByText('Hover me');
    expect(screen.queryByText(text)).not.toBeInTheDocument();

    userEvent.hover(tooltipEL);
    expect(await screen.findByText(text)).toBeInTheDocument();

    userEvent.unhover(tooltipEL);

    await waitForElementToBeRemoved(() => screen.queryByText(text));

    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
});
