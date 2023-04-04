import { FC } from 'react';

import { Wrapper } from './guests-appointment.styled';
import { GuestsAppointmentProps } from './types';

export function GuestsAppointment({
  groupNum,
  guests,
}: GuestsAppointmentProps) {
  return (
    <Wrapper>
      <Wrapper>{groupNum}</Wrapper>
      <Wrapper>{guests}</Wrapper>
    </Wrapper>
  );
}
