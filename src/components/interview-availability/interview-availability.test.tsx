import { render, screen } from '@/tests/renderWithProviders';
import { InterviewAvailability } from './interview-availability';

describe('<InterviewAvailability>', () => {
  it('It should have a title', () => {
    render(<InterviewAvailability />);
    const interviewtitle = screen.getByRole('heading', { level: 1 });
    expect(interviewtitle).toBeInTheDocument();
    expect(interviewtitle).toHaveTextContent(
      'Technical Interview Availability',
    );
  });
  it('It should have a subtitle', () => {
    render(<InterviewAvailability />);
    const interviewsubtitle = screen.getByText(
      'Schedule a technical interview for a candidate.',
    );
    expect(interviewsubtitle).toBeInTheDocument();
  });
  it('It should have a form', () => {
    render(<InterviewAvailability />);
    const interviewform = screen.getByTestId('interview-form-test');
    expect(interviewform).toBeInTheDocument();
  });
  it('It should have a button', () => {
    render(<InterviewAvailability />);
    const interviewButton = screen.getByRole('button', { name: 'Search' });
    expect(interviewButton).toBeInTheDocument();
  });
  it('It should have a input', () => {
    render(<InterviewAvailability />);
    const interviewInput = screen.getByText('Date:');
    expect(interviewInput).toBeInTheDocument();
  });
});
