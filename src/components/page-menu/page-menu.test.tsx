import { render, screen } from '@/tests/renderWithProviders';
import { PageMenu } from '.';

describe('<PageHeader  />', () => {
  it('has rendered', () => {
    render(<PageMenu />);
    const textTest = screen.getByTestId('Menu');
    expect(textTest).toBeInTheDocument();
  });
});
