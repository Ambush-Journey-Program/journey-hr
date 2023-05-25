import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Tab } from '.';

describe('<Tab />', () => {
  it('should display Label', () => {
    render(<Tab label="Page 1" icon="AcademicCapIcon" />);
    const link = screen.getByText('Page 1');
    expect(link).toBeInTheDocument();
  });
  it('should display Icon', () => {
    render(<Tab label="Page 1" icon="AcademicCapIcon" />);
    const link = screen.getByTestId('button-icon');
    expect(link).toBeInTheDocument();
  });
});
