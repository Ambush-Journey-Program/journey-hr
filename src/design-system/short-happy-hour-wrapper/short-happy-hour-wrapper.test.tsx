import { render, screen } from '@/tests/renderWithProviders';
import { ShortHappyHourWrapper } from '.';

describe('<ShortHappyHourWrapper />', () => {
  describe('should have this ', () => {
    const title = 'Pizza and Games';
    const date = '01/20/2023';
    it('should have two children', () => {
      render(
        <ShortHappyHourWrapper
          childrenAppointment={title}
          childrenDate={date}
        />,
      );
      const labelTitle = screen.getByText(title);
      const labelDate = screen.getByText(date);
      expect(labelDate && labelTitle).toBeInTheDocument();
    });
    it('should have two paragraphs', () => {
      render(
        <ShortHappyHourWrapper
          childrenAppointment={title}
          childrenDate={date}
        />,
      );
      const labelTitle = screen.getByText('Name of the event');
      const labelDate = screen.getByText('Date:');
      expect(labelTitle && labelDate).toBeInTheDocument();
    });
  });
});
