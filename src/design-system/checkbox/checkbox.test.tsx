import { CheckBox } from '.';
import { render, screen } from '@/tests/renderWithProviders';

describe('<Checkbox />', () => {
  it('CheckBox is rendered', () => {
    render(
      <CheckBox
        onChange={() => {}}
        isChecked={false}
        label="Label"
        description="Description"
      />,
    );
    const label = screen.getByText('Label');

    expect(label).toBeInTheDocument();
  });

  it('CheckBox is disabled', () => {
    render(
      <CheckBox
        onChange={() => {
          console.log('teste');
        }}
        isChecked={false}
        label="Label"
        description="Description"
        disabled={true}
      />,
    );
    const checkbox = screen.getByTestId('checkbox-test');

    expect(checkbox).toBeDisabled();
  });

  it('CheckBox is checked', () => {
    render(
      <CheckBox
        onChange={() => {
          console.log('teste');
        }}
        isChecked={true}
        label="Label"
        description="Description"
        disabled={true}
      />,
    );
    const checkbox = screen.getByTestId('checkbox-test');

    expect(checkbox).toBeChecked();
  });
});
