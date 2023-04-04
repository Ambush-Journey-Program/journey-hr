import { render, screen } from '@/tests/renderWithProviders';
import { ShortHappyHour } from '.';

describe('<ShortHappyHour />', () => {
  describe('should render ', () => {
    const title = 'Pizza and Games';
    const date = '01/20/2023';
    it('should have children Appointment', () => {
      render(<ShortHappyHour Appointment={title} Date={date} />);
      const labelTitle = screen.getByText(title);
      expect(labelTitle).toBeInTheDocument();
    });
    it('should have children Date', () => {
      render(<ShortHappyHour Appointment={title} Date={date} />);
      const labelDate = screen.getByText(date);
      expect(labelDate).toBeInTheDocument();
    });
    it('should have two paragraphs', () => {
      render(<ShortHappyHour Appointment={title} Date={date} />);
      const labelTitle = screen.getByText('Name of the event');
      const labelDate = screen.getByText('Date:');
      expect(labelTitle && labelDate).toBeInTheDocument();
    });
  });
});
