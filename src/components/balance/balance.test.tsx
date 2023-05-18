import * as React from 'react';

import { Balance } from './balance';
import { render, screen } from '@/tests/renderWithProviders';
import { title } from 'process';

describe('<Balance />', () => {
  it('It checks if shows employee card', () => {
    render(
      <Balance
        consumedDays={0}
        optionalHolidays={0}
        isAdmin={false}
        availableDays={0}
        title="Your Current Balance"
      />,
    );
    const labelSpan = screen.getByText('Your Current Balance');

    expect(labelSpan).toHaveTextContent('Your Current Balance');
  });

  it('It checks if it is a admin card', () => {
    render(
      <Balance
        isAdmin={true}
        availableDays={0}
        consumedDays={0}
        optionalHolidays={0}
        title={''}
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
        title={''}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
  });
});
