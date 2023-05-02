import { Subtitle } from '@/design-system';
import { RadioButton } from '../../design-system/radio-button';
import * as Styled from './time-off-type.styled';

export function TimeOffType() {
  return (
    <Styled.Wrapper>
      <Styled.ContainerSubtitle>
        <Subtitle variant={'s5'} fontWeight={'medium'}>
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
    </Styled.Wrapper>
  );
}
