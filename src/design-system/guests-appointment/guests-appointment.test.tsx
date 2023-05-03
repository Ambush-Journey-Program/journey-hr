import * as React from 'react';
import { render, screen } from '../../tests/renderWithProviders';
import { GuestsAppointment } from '.';
describe('<GuestsAppointment />', () => {
  describe('should have this render', () => {
    const listGuests = ['Mariana', 'Marcello', 'Lucas', 'Barbara Santos'];
    it('should render the list of guests', () => {
      render(<GuestsAppointment guests={listGuests} />);

      const labelSpan = screen.getByText('Barbara Santos');
      expect(labelSpan).toBeInTheDocument();
    });
    it('should render the number of guests', () => {
      render(<GuestsAppointment guests={listGuests} />);

      const labelSpan = screen.getByText('Group of 4');
      expect(labelSpan).toBeInTheDocument();
    });
  });
});
