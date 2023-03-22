import { render, screen } from '../../tests/renderWithProviders';
import { InterviewAvailability } from '.';

describe('<InterviewAvailability>', () => {
  it('It should have a title an subtitle', () => {
    render(<InterviewAvailability />);

    const interviewtitle = screen.getByTestId('interview-title-test');
    const interviewsubtitle = screen.getByTestId('interview-subtitle-test');
    expect(interviewtitle).toBeInTheDocument();
    expect(interviewsubtitle).toBeInTheDocument();
  });
  it('It should have a form', () => {
    render(<InterviewAvailability />);
    const interviewform = screen.getByTestId('interview-form-test');
    expect(interviewform).toBeInTheDocument();
  });
  it('It should have a button', () => {
    render(<InterviewAvailability />);
    const interviewButton = screen.getByRole('button');
    expect(interviewButton).toBeInTheDocument();
  });
  it('It should have a input', () => {
    render(<InterviewAvailability />);
    const interviewInput = screen.getByTestId('interview-input-test');
    expect(interviewInput).toBeInTheDocument();
  });
});
