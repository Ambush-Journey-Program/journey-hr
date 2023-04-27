import { RadioButton } from '../../design-system/radio-button';
import * as Styled from './time-off-type.styled';

export function TimeOffType() {
  return (
    <Styled.Wrapper>
      <Styled.ParagraphStyle>Apply For</Styled.ParagraphStyle>
      <RadioButton
        defaultChecked
        value="paid-time-off"
        label="Paid Time Off"
        name="time-off"
      ></RadioButton>
      <RadioButton
        value="personal-leave"
        label="Personal Leave"
        name="time-off"
      ></RadioButton>
    </Styled.Wrapper>
  );
}
