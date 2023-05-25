import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Page } from '.';

describe('<Page />', () => {
  it('when the component is actually used', () => {
    render(<Page>Hello World</Page>);
    const labelSpan = screen.getByTestId('Menu');
    expect(labelSpan).toBeInTheDocument();
  });
  it('when the component is actually used', () => {
    const label = 'My children';
    render(<Page>{label}</Page>);
    const labelSpan = screen.getByText(label);
    expect(labelSpan).toBeInTheDocument();
  });
  it('when the component is actually used', () => {
    const label = 'My children';
    render(
      <Page>
        <div>
          <h1>{label}</h1>
        </div>
      </Page>,
    );
    const labelSpan = screen.getByText(label);
    expect(labelSpan).toBeInTheDocument();
  });
});
