import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { TextAreaRequestReason } from './reason-text-area';

describe('<TextAreaRequestReason  />', () => {
  render(<TextAreaRequestReason label="testlabel" />);
  it('render te component', () => {
    const renderTest = screen.getByTestId('text-area');
    expect(renderTest).toBeInTheDocument();
  });
});
