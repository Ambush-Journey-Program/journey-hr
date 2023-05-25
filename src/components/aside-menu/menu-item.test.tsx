import { render, screen } from '@/tests/renderWithProviders';
import { MenuItem } from '.';

describe('<PageHeader  />', () => {
  it('has rendered', () => {
    render(
      <MenuItem url="/Test" icon="UsersIcon">
        Test
      </MenuItem>,
    );
    const textTest = screen.getByRole('link');
    expect(textTest).toHaveAttribute('href', '/Test');
  });
});
