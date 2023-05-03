import 'jest-styled-components';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@/tests/renderWithProviders';
import { Tooltip } from './tooltip';

describe('<Tooltip />', () => {
  it('should be visible when hovering the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);

    const tooltipEL = screen.getByText('Hover me');
    expect(screen.queryByText(text)).not.toBeInTheDocument();
    await userEvent.hover(tooltipEL);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should be not visible when hovering out the child element', async () => {
    const text = 'Hi';
    render(<Tooltip text={text}>Hover me</Tooltip>);

    const tooltipEL = screen.getByText('Hover me');
    expect(screen.queryByText(text)).not.toBeInTheDocument();
    await userEvent.hover(tooltipEL);
    expect(screen.getByText(text)).toBeInTheDocument();
    await userEvent.unhover(tooltipEL);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });
});
