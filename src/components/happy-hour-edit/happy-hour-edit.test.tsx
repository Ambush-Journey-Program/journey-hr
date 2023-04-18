import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { HappyHourEdit } from '../happy-hour-edit';
import { guestsListData } from './const';
import userEvent from '@testing-library/user-event';

describe('<HappyHourEdit />', () => {
  describe('should have this remove', () => {
    it('It should have a title', () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={2} />);
      const title = screen.getByText('Group Names');

      expect(title).toBeInTheDocument();
    });
    it('It should have a Select input', () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={2} />);
      const title = screen.getByDisplayValue('Label');

      expect(title).toBeInTheDocument();
    });
    it('It should have a Schedule button and display a tooltip', async () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={2} />);
      await userEvent.click(screen.getByText('Schedule'));
      const title = screen.getByText('Guests Required');
      expect(title).toBeInTheDocument();
    });
    it('calls Add Name button', async () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={3} />);
      const schaluleButton = screen.getByText('Schedule');
      userEvent.click(screen.getByDisplayValue('Label'));
      userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Ana Urbano' }),
      );
      const name = screen.getByRole('option', { name: 'Ana Urbano' });
      await userEvent.click(name);
      await userEvent.click(screen.getByText('Add Name'));
      await userEvent.click(schaluleButton);
      expect(screen.getByText('Ana Urbano')).toBeInTheDocument();
      expect(schaluleButton).not.toBeDisabled();
    });

    it('It should have a maxGuest', async () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={2} />);
      const name = screen.getByRole('option', { name: 'Ana Urbano' });
      const name2 = screen.getByRole('option', { name: 'Claudia da Silva' });
      const btnAdd = screen.getByText('Add Name');
      await userEvent.click(screen.getByDisplayValue('Label'));
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Ana Urbano' }),
      );
      await userEvent.click(name);
      await userEvent.click(btnAdd);
      expect(btnAdd).not.toBeDisabled();
      expect(screen.getByText('Ana Urbano')).toBeInTheDocument();

      await userEvent.click(screen.getByDisplayValue('Label'));
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Claudia da Silva' }),
      );
      await userEvent.click(name2);
      await userEvent.click(btnAdd);
      expect(btnAdd).toBeDisabled();
      expect(screen.getByText('Claudia da Silva')).toBeInTheDocument();
    });
  });
});
