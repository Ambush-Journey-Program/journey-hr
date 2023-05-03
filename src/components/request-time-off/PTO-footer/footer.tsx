import { Button } from '@ambush/ui';
import { FooterProps } from './types';
import * as Styled from './footer.styled';
import { useEffect, useState } from 'react';

const buttonLabel: { [key: string]: string } = {
  timeOff: 'Apply Time  Off',
  request: 'Request Manager',
  allDone: 'Go to Homepage',
};
export function Footer({ cancel, apply, variant = 'timeOff' }: FooterProps) {
  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(buttonLabel[variant]);
  }, [variant]);

  return (
    <Styled.Footer variant={variant} data-testid="footer">
      <Button
        onClick={cancel}
        className="cancelButon button"
        color="secondary"
        variant="outlined"
        sizeVariant="small"
      >
        Cancel
      </Button>
      <Button
        onClick={apply}
        className="fowardButon button"
        sizeVariant="small"
      >
        {label}
      </Button>

      <Button
        onClick={apply}
        className="confirmationButon button"
        variant="outlined"
        sizeVariant="small"
      >
        Confirm Dates
      </Button>
    </Styled.Footer>
  );
}
