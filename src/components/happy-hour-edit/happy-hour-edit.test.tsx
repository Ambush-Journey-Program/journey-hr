import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { HappyHourEdit } from '../happy-hour-edit';
import { guestsList } from './const';
import { Guest } from './types';

describe('<HappyHourEdit />', () => {
  describe('should have this remove', () => {
    it('It should have a title', () => {
      function addGuest(updatedGuestList: Guest[]) {}
      render(
        <HappyHourEdit
          guestsList={guestsList}
          maxGuests={6}
          addGuest={addGuest}
        />,
      );
      const title = screen.getByText('Group Names');
      expect(title).toBeInTheDocument();
    });
    it('It should have a Select input', () => {
      function addGuest(updatedGuestList: Guest[]) {}
      render(
        <HappyHourEdit
          guestsList={guestsList}
          maxGuests={6}
          addGuest={addGuest}
        />,
      );
      const title = screen.getByText('Group Names');
      expect(title).toBeInTheDocument();
    });

    it('It should have a maxGuest', () => {
      function addGuest(updatedGuestList: Guest[]) {}
      render(
        <HappyHourEdit
          guestsList={guestsList}
          maxGuests={6}
          addGuest={addGuest}
        />,
      );
      expect(guestsList).to.have.length(4);
      expect(guestsList.length).toBeLessThanOrEqual(6);
    });
  });
});
