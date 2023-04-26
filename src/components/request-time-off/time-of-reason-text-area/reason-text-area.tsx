import { TextArea } from '@ambush/ui';
import { TextAreaRequestReasonProps } from './types';
import * as Styled from './reason-text-area.styled';

// eslint-disable-next-line no-empty-pattern
export function TextAreaRequestReason({}: TextAreaRequestReasonProps) {
  return (
    <Styled.Wrapper data-testid="text-area">
      <TextArea
        label="Reason for Time Off Request"
        placeholder="Please explain the reason for your request to the manager."
        required
      />
    </Styled.Wrapper>
  );
}
