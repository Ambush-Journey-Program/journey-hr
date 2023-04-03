import { render, screen } from '@testing-library/react';
import { ShortHappyHourWrapper } from '.';

describe('<ShortHappyHourWrapper />', () => {
  describe('should have this remove', () => {
    it('when the component is actually used', () => {
      const label = 'it works';
      const props = { label };

      render(<ShortHappyHourWrapper children={undefined} {...props} />);
      const labelSpan = screen.getByText(label);

      expect(labelSpan).toBeInTheDocument();
    });
  });
});
