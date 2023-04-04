import * as Styled from './guests-appointment.styled';
import { GuestsAppointmentProps } from './types';

export function GuestsAppointment({ guests }: GuestsAppointmentProps) {
  return (
    <Styled.Wrapper>
      <Styled.ContainerName>
        <Styled.ContainerNumber>
          Group of {guests.length}
        </Styled.ContainerNumber>
        <Styled.Guests>{guests}</Styled.Guests>
      </Styled.ContainerName>
    </Styled.Wrapper>
  );
}
