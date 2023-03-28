import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { InterviewAvailability } from '.';
import { theme } from '../../styles/theme';

describe('<InterviewAvailability>', () => {
  it('It should have a title an subtitle', () => {
    render(
      <ThemeProvider theme={theme}>
        <InterviewAvailability />
      </ThemeProvider>,
    );
    const interviewtitle = screen.getByTestId('interview-title-test');
    const interviewsubtitle = screen.getByTestId('interview-subtitle-test');
    expect(interviewtitle).toBeInTheDocument();
    expect(interviewsubtitle).toBeInTheDocument();
  });
  it('It should have a form', () => {
    render(
      <ThemeProvider theme={theme}>
        <InterviewAvailability />
      </ThemeProvider>,
    );
    const interviewform = screen.getByTestId('interview-form-test');
    expect(interviewform).toBeInTheDocument();
  });
  it('It should have a button', () => {
    render(
      <ThemeProvider theme={theme}>
        <InterviewAvailability />
      </ThemeProvider>,
    );
    const interviewButton = screen.getByRole('button');
    expect(interviewButton).toBeInTheDocument();
  });
  it('It should have a input', () => {
    render(
      <ThemeProvider theme={theme}>
        <InterviewAvailability />
      </ThemeProvider>,
    );
    const interviewInput = screen.getByTestId('interview-input-test');
    expect(interviewInput).toBeInTheDocument();
  });
});
