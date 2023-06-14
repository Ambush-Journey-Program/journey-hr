import { render, screen } from '@/tests/renderWithProviders';
import { AsideMenu } from './aside-menu';

describe('<PageHeader  />', () => {
  it('has rendered', () => {
    render(<AsideMenu />);
    const textTest = screen.getByTestId('Menu');
    expect(textTest).toBeInTheDocument();
  });
});
