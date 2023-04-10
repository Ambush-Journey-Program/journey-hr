import { render, screen } from '@/tests/renderWithProviders';
import * as React from 'react';
import { HappyHourEdit } from '../happy-hour-edit';
import { guestsList } from './const';

describe('<HappyHourEdit />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      render(
        <HappyHourEdit guestsList={guestsList} maxGuests={6} {...props} />,
      );
      const interviewsubtitle = screen.getByText(
        'Schedule a technical interview for a candidate.',
      );
      expect(interviewsubtitle).toBeInTheDocument();
    });
  });
});
