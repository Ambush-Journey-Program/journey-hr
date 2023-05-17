import * as React from 'react';

import { Balance } from './balance';
import { render, screen } from '@/tests/renderWithProviders';

describe('<Balance />', () => {
  it('It checks if shows employee card', () => {
    const label = 'Your Current Balance';
    const props = { label };

    render(
      <Balance
        consumedDays={0}
        optionalHolidays={0}
        isAdmin={false}
        availableDays={0}
        {...props}
      />,
    );
    const labelSpan = screen.getByText(label);

    expect(labelSpan).toHaveTextContent(label);
  });

  it('It checks if it is a admin card', () => {
    render(
      <Balance
        isAdmin={true}
        availableDays={0}
        consumedDays={0}
        optionalHolidays={0}
      />,
    );
    const avatar = screen.getByRole('img');
    expect(avatar).toBeVisible();
  });
  it('It checks if the button is visible', () => {
    render(
      <Balance
        isAdmin
        availableDays={0}
        buttonClick={() => {}}
        consumedDays={0}
        optionalHolidays={0}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
  });
});
