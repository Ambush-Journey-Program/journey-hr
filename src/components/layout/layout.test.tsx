import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Layout } from './layout';

describe('<Layout />', () => {
  it('when the component is actually used', () => {
    render(<Layout>Hello World</Layout>);
    const labelSpan = screen.getByTestId('Menu');
    expect(labelSpan).toBeInTheDocument();
  });
  it('when the component is actually used', () => {
    const label = 'My children';
    render(<Layout>{label}</Layout>);
    const labelSpan = screen.getByText(label);
    expect(labelSpan).toBeInTheDocument();
  });
  it('when the component is actually used', () => {
    const label = 'My children';
    render(
      <Layout>
        <div>
          <h1>{label}</h1>
        </div>
      </Layout>,
    );
    const labelSpan = screen.getByText(label);
    expect(labelSpan).toBeInTheDocument();
  });
});
