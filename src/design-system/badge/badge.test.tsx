import { render, screen } from '@/tests/renderWithProviders';
import { Badge } from '.';

describe('<Badge  />', () => {
  render(<Badge text={'Dev Team'} />);
  it('should exist', () => {
    const textTest = screen.getByTestId('test');
    expect(textTest).toHaveTextContent('Dev Team');
  });
});
