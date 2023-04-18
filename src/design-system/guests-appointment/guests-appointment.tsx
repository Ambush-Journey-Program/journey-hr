import * as Styled from './guests-appointment.styled';
import { type GuestsAppointmentProps } from './types';

export function GuestsAppointment({ guests }: GuestsAppointmentProps) {
  return (
    <Styled.Wrapper>
      <Styled.ContainerNumber>
        Group of
        {guests.length}
      </Styled.ContainerNumber>
      <Styled.Guests>
        {guests.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </Styled.Guests>
    </Styled.Wrapper>
  );
}
