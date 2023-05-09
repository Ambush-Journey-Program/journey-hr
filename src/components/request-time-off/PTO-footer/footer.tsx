import { Button } from '@ambush/ui';
import { FooterProps } from './types';
import * as Styled from './footer.styled';
import { useEffect, useState } from 'react';

const buttonLabel: { [key: string]: string } = {
  timeOff: 'Apply Time Off',
  request: 'Request Manager',
  allDone: 'Go to Homepage',
};
export function Footer({
  onCancel,
  onApply,
  variant = 'timeOff',
}: FooterProps) {
  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(buttonLabel[variant]);
  }, [variant]);

  return (
    <Styled.Footer variant={variant} data-testid="footer">
      {['request', 'timeOff'].includes(variant) && (
        <Button
          onClick={onCancel}
          className="cancelButon button"
          color="secondary"
          variant="outlined"
          sizeVariant="small"
          data-testid="cancelButton"
        >
          Cancel
        </Button>
      )}

      {['allDone', 'request', 'timeOff'].includes(variant) && (
        <Button
          onClick={onApply}
          className="fowardButon button"
          sizeVariant="small"
          data-testid="fowardButton"
        >
          {label}
        </Button>
      )}

      {variant === 'confirm' && (
        <Button
          onClick={onApply}
          className="confirmationButon button"
          variant="outlined"
          sizeVariant="small"
          data-testid="confirmationButton"
        >
          Confirm Dates
        </Button>
      )}
    </Styled.Footer>
  );
}
