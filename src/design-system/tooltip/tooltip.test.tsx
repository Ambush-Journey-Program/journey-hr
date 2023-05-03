import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@/tests/renderWithProviders';
import { Tooltip } from './tooltip';

describe('<Tooltip />', () => {
  it('should be visible when hovering the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);

    const tooltipEL = screen.getByText('Hover me');
    expect(screen.queryByText(text)).not.toBeInTheDocument();

    act(() => {
      userEvent.hover(tooltipEL);
    })
    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it('should be not visible when hovering out the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);

    expect(screen.queryByText(text)).not.toBeInTheDocument();

    act(() => {
      userEvent.hover(screen.getByText('Hover me'));
    });

    expect(await screen.findByText(text)).toBeInTheDocument();

    act(() => {
      userEvent.unhover(screen.getByText('Hover me'));
    });
    await new Promise((resolve, reject) => {
      window.setTimeout(resolve, 0);
    })

    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
});
