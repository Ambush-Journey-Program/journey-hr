import { RadioButton } from '../radio-button';
import * as Styled from './time-off-type.styled';

export function TimeOffType() {
  return (
    <Styled.Wrapper>
      <Styled.ParagraphStyle>Aplly For</Styled.ParagraphStyle>
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
