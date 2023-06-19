import * as React from 'react';
import { OptionalHolidays } from '.';
import { render, screen } from '@/tests/renderWithProviders';

describe('<OptionaHolidays/>', () => {
  it('Label should be displayed', () => {
    render(<OptionalHolidays />);
    const label = screen.getByTestId('optionalHolidays');
    expect(label).toHaveTextContent('Optional Holidays');
  });
  it('CheckBox is checked', () => {
    render(<OptionalHolidays />);
    const checkbox = screen.getByRole('checkbox', {
      name: 'Brazilian Republic Proclamation Day Nov 15 Thu, 2023',
    });

    expect(checkbox).toBeChecked();
  });
});
