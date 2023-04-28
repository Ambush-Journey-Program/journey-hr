import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { HappyHourEdit } from '../happy-hour-edit';
import { guestsListData } from './const';
import userEvent from '@testing-library/user-event';

describe('<HappyHourEdit />', () => {
  describe('should have this render', () => {
    it('Should have a title', () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={2} />);
      const title = screen.getByText('Group Names');

      expect(title).toBeInTheDocument();
    });
    it('Should have a Select input', () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={2} />);
      const select = screen.getByDisplayValue('Select a name');

      expect(select).toBeInTheDocument();
    });

    it('calls Add Name button and Schalule button is disable', async () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={3} />);
      const scheduleButton = screen.getByText('Schedule');
      await userEvent.click(screen.getByDisplayValue('Select a name'));
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Ana Urbano' }),
      );
      const name = screen.getByRole('option', { name: 'Ana Urbano' });
      await userEvent.click(name);
      await userEvent.click(screen.getByText('Add Name'));
      await userEvent.click(scheduleButton);
      expect(screen.getByText('Ana Urbano')).toBeInTheDocument();
      expect(scheduleButton).toBeDisabled();
    });

    it('Should have a maxGuest', async () => {
      render(<HappyHourEdit guestsListData={guestsListData} maxGuests={2} />);
      const name = screen.getByRole('option', { name: 'Ana Urbano' });
      const name2 = screen.getByRole('option', { name: 'Claudia da Silva' });
      const btnAdd = screen.getByText('Add Name');
      await userEvent.click(screen.getByDisplayValue('Select a name'));
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Ana Urbano' }),
      );
      await userEvent.click(name);
      await userEvent.click(btnAdd);
      expect(btnAdd).not.toBeDisabled();
      expect(screen.getByText('Ana Urbano')).toBeInTheDocument();

      await userEvent.click(screen.getByDisplayValue('Select a name'));
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
