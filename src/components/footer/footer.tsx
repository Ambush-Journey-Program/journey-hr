import { Button } from '@ambush/ui';
import { FooterProps } from './types';
import * as Styled from './footer.styled';
import { useEffect, useState } from 'react';

const cancelButton = ['request', 'timeOff'];
const forwardButton = ['allDone', 'request', 'timeOff'];

const buttonLabel: { [key: string]: string } = {
  timeOff: 'Apply Time Off',
  request: 'Request Manager',
  allDone: 'Go to Homepage',
};

export function Footer({
  onCancel,
  onApply,
  variant = 'timeOff',
  disabled = true,
}: FooterProps) {
  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(buttonLabel[variant]);
  }, [variant]);

  const isButtonDisabled =
    disabled = true
  ;

  return (
    <Styled.Footer variant={variant} data-testid="footer">
      {cancelButton.includes(variant) && (
        <Button
          onClick={onCancel}
          disabled={isButtonDisabled}
          color="secondary"
          variant="outlined"
          sizeVariant="small"
        >
          Cancel
        </Button>
      )}

      {forwardButton.includes(variant) && (
        <Button onClick={onApply} sizeVariant="small" disabled={isButtonDisabled}>
          {label}
        </Button>
      )}

      {variant === 'confirm' && (
        <Button onClick={onApply} variant="outlined" sizeVariant="small">
          Confirm Dates
        </Button>
      )}
    </Styled.Footer>
  );
}
