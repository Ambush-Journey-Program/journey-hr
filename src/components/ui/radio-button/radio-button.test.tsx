import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { RadioButton } from '.';

describe('<RadioButton />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      const label = 'it works';
      const props = { label };

      render(<RadioButton {...props} />);
      const labelSpan = screen.getByText(label);

      expect(labelSpan).toBeInTheDocument();
    });
  });
});
