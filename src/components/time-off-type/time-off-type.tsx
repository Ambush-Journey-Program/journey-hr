import { Subtitle } from '@/design-system';
import { RadioButton } from '@ambush/ui';
import * as Styled from './time-off-type.styled';

export function TimeOffType() {
  return (
    <Styled.Container>
      <Styled.ContainerSubtitle>
        <Subtitle variant="s5" fontWeight="medium">
          Apply For
        </Subtitle>
      </Styled.ContainerSubtitle>
      <RadioButton
        defaultChecked
        value="paid-time-off"
        label="Paid Time Off"
        name="time-off"
      />
      <RadioButton
        value="personal-leave"
        label="Personal Leave"
        name="time-off"
      />
    </Styled.Container>
  );
}
